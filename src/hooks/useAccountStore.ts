import { AccountStoreContext } from "@/providers/AccountStoreProvider";
import { UseAccountStore } from "@/stores/accountStore";
import { useContext } from "react";

export function useAccountStore(selector: Parameters<UseAccountStore>[0]) {
  const accountStore = useContext(AccountStoreContext);
  if (!accountStore) {
    throw new Error("Missing AccountStoreProvider");
  }

  return accountStore(selector);
}
