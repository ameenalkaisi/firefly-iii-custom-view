import { AccountStoreContext } from "@/providers/AccountStoreProvider";
import { AccountValues } from "@/stores/accountStore";
import { useContext } from "react";
import { useStore } from "zustand";

export function useAccountStore<T>(selector?: (state: AccountValues) => T): T {
  const accountStore = useContext(AccountStoreContext);
  if (!accountStore) {
    throw new Error("Missing AccountStoreProvider");
  }

  return useStore(accountStore, selector!);
}
