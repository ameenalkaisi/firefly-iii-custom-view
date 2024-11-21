import { Transaction } from "@/types/domain";
import { components } from "@/types/firefly-api";

export const getTransactionsFromResponse = (data: components["schemas"]["TransactionArray"]): Transaction[] => {
  return [];
};
