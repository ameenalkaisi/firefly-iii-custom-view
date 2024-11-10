import { config } from "@/constants/config";
import { client } from "@/lib/axios";
import { AccountStore, makeAccountStore } from "@/stores/accountStore";
import { useQuery } from "@tanstack/react-query";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { StoreApi } from "zustand";

export const AccountStoreContext = createContext<StoreApi<AccountStore> | null>(
  null,
);

export const AccountStoreProvider = ({ children }: PropsWithChildren) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["account-transactions"],
    queryFn: () => {
      return client
        .get<any>(config.FIREFLY_API_URL + "/transactions")
        .then((res) => res.data);
    },
  });

  const [accountStore, setAccountStore] = useState<StoreApi<AccountStore>>();

  useEffect(() => {
    if (!data) return;

    const accountStore = makeAccountStore({ transactions: getTransactionsFromResponse(data) });

    setAccountStore(accountStore);
  }, [data]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error! {error.message} {error.stack} {error.name} {String(error.cause)}
      </p>
    );
  }

  if (!accountStore) {
    return <p>Not sure why account isn&apos;t set :(</p>;
  }

  return (
    <AccountStoreContext.Provider value={accountStore}>
      {children}
    </AccountStoreContext.Provider>
  );
};
