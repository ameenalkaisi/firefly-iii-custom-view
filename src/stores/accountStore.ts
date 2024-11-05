import { Transaction } from "@/types/domain";
import { StateCreator, StoreApi } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/vanilla/shallow";

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
    ...inputs,
    ...DEFAULT_VALUES,
    updateTransactions: (newStuff) => set({ transactions: newStuff }),
  });

export const makeAccountStore = (inputValues: Partial<AccountValues>) => {
  return createWithEqualityFn<AccountStore>(
    accountStoreStateCreator(inputValues),
    shallow,
  ).getState();
};

export type UseAccountStore = StoreApi<AccountValues>;
