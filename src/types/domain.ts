export type AccountId = string;

export type Transaction = {
  fromAccountId: AccountId;
  toAccountId: AccountId;
  amount: number;
};

export type Account = {
  name: string;
  balance: number;
};

// TODO: find it
export type cashAccountId = "temp";
