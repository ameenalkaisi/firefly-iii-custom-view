import { config } from "@/constants/config";
import { client } from "@/lib/axios";
import { makeAccountStore, UseAccountStore } from "@/stores/accountStore";
import { useQuery } from "@tanstack/react-query";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const AccountStoreContext = createContext<null | UseAccountStore>(null);

export const AccountStoreProvider = ({ children }: PropsWithChildren) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["account-transactions"],
    queryFn: () => {
      return client
        .get<any>(config.FIREFLY_API_URL + "/transactions")
        .then((res) => res.data);
    },
  });

  const [accountStore, setAccountStore] = useState<UseAccountStore | null>(
    null,
  );

  useEffect(() => {
    if (!data) return;

    const accountStore = makeAccountStore({ transactions: data });

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
