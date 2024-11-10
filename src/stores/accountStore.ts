import { Transaction } from "@/types/domain";
import { createStore, StateCreator } from "zustand";

export interface AccountValues {
  transactions: Transaction[];
}

interface AccountMutators {
  updateTransactions: (newTransactions: Transaction[]) => void;
}

export type AccountStore = AccountValues & AccountMutators;

export type AccountStoreStateCreator = StateCreator<
  AccountValues,
  [],
  [],
  AccountStore
>;

export const DEFAULT_VALUES: AccountValues = {
  transactions: [],
};

const accountStoreStateCreator =
  (inputs: Partial<AccountValues>): AccountStoreStateCreator =>
  (set) => ({
    ...DEFAULT_VALUES,
    ...inputs,
    updateTransactions: (newStuff) => set({ transactions: newStuff }),
  });

export const makeAccountStore = (inputValues: Partial<AccountValues>) => {
  return createStore<AccountStore>(accountStoreStateCreator(inputValues));
};
