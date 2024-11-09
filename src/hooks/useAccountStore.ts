import { AccountStoreContext } from "@/providers/AccountStoreProvider";
import { AccountStore } from "@/stores/accountStore";
import { useContext } from "react";
import { StoreApi, UseBoundStore, useStore } from "zustand";
import { shallow } from "zustand/shallow";
import { useStoreWithEqualityFn } from "zustand/traditional";

export function useAccountStore(
  selector: Parameters<UseBoundStore<StoreApi<AccountStore>>>[0],
) {
  const accountStore = useContext(AccountStoreContext);
  if (!accountStore) {
    throw new Error("Missing AccountStoreProvider");
  }

  return useStoreWithEqualityFn(accountStore, selector, shallow);
}
