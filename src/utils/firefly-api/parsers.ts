import { Transaction } from "@/types/domain";
import { components } from "@/types/firefly-api";

export const getTransactionsFromResponse = (
  transactionArrayContainer: components["schemas"]["TransactionArray"],
): Transaction[] => {
  const transactions = transactionArrayContainer.data
    .flatMap((entry) => entry.attributes)
    .flatMap((attribute) =>
      attribute.transactions.map((transaction) => ({
        user: attribute.user,
        created_at: attribute.created_at,
        updated_at: attribute.updated_at,
        group_title: attribute.group_title,
        transaction: transaction,
      })),
    );

  console.log("TRANSACTIONS: ", transactions);

  return [];
};
