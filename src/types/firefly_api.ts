export type TransactionArray = {
  data: TransactionRead[];
  meta: Meta;
  links: PageLink;
};

export type Meta = {
  pagination: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
};

export type PageLink = {
  self: string;
  first: string;
  next: string;
  prev: string;
  last: string;
};

export type ObjectLink = {
  0: {
    rel: string;
    uri: string;
  };

  self: string;
};

export type TransactionRead = {
  id: string;
  type: string;
  links: ObjectLink;
  attributes: Transaction;
};

export type Transaction = {
  created_at: string;
  updated_at: string;
  user: string;
  group_title: string;
  transactions: TransactionSplit[];
};

export type TransactionSplit = {
  user: string;
  transaction_journal_id: string;
  type: TransactionTypeProperty;
  date: Date;
  order: number; // order of the entry in the list of entries

  currency_id?: string;
  currency_code?: string;
  currency_symbol: string;
  currency_name: string;
  currency_decimal_places: number;

  foreign_currency_id?: string;
  foreign_currency_code?: string;
  foreign_currency_symbol: string;
  foreign_currency_decimal_places: number;

  amount: string;
  foreign_amount: string;
  description: string;

  source_id?: string; // source account ID
  source_name?: string;
  source_iban?: string;
  source_type: AccountTypeProperty;
  destination_name?: string;

  destination_iban?: string;
  destination_type: AccountTypeProperty;

  budget_id?: string;
  budget_name?: string;

  category_id?: string;
  category_name?: string;

  bill_id?: string;
  bill_name?: string;

  reconciled: boolean;
  notes?: string;

  tags?: string[];

  internal_reference?: string;
  external_id?: string;
  external_url?: string;
  original_source?: string;

  recurrence_id?: string;
  recurrence_total: number;
  recurrence_count: number;

  bunq_payment_id?: string; // @deprecated
  import_hash_v2?: string;

  sepa_cc?: string;
  sepa_ct_op?: string;
  sepa_ct_id?: string;
  sepa_db?: string;
  sepa_country?: string;
  sepa_ep?: string;
  sepa_ci?: string;
  sepa_batch_id?: string;

  interest_date?: Date;
  book_date?: Date;
  process_date?: Date;
  due_date?: Date;
  payment_date?: Date;
  invoice_date?: Date;

  latitude?: number;
  longitude?: number;
  zoom_level?: number;

  has_attachments: boolean;
};

export enum TransactionTypeProperty {
  "withdrawl",
  "deposit",
  "transfer",
  "reconciliation",
  "opening balance",
}

export enum AccountTypeProperty {
  "Default account",
  "Cash account",
  "Asset account",
  "Expense account",
  "Revenue account",
  "Initial balance account",
  "Beneficiary account",
  "Import account",
  "Reconciliation account",
  "Loan",
  "Debt",
  "Mortgage",
}

export type AccountArray = {
  data: AccountRead[];
  meta: Meta;
};

export type AccountRead = {
  type: string;
  id: string;
  attributes: Account;
};

export type Account = {
  created_at: Date;
  updated_at: Date;
  active: boolean;
  order: number;
  name: string;
  type: ShortAccountTypeProperty;
  account_role?: AccountRoleProperty;

  currency_id: string;
  currency_code: string;
  currency_symbol: string;
  currency_decimal_places: number;

  current_balance: string;
  current_balance_date: Date;

  iban?: string;
  bic?: string;
  account_number?: string;

  opening_balance: string;
  current_debt?: string;
  opening_balance_date?: Date;
  virtual_balance: string;
  include_net_worth: boolean;
  credit_card_type?: CreditCardTypeProperty;
  monthly_payment_date?: Date;
  liability_type?: LiabilityTypeProperty;
  liability_direction?: LiabilityDirectionProperty;
  interest?: string;
  interest_period?: InterestPeriodProperty;
  notes?: string;
  latitude?: number;
  longitude?: number;
  zoom_level?: number;
};

export enum ShortAccountTypeProperty {
  "asset",
  "expense",
  "import",
  "revenue",
  "cash",
  "liability",
  "liabilities",
  "initial-balance",
  "reconciliation",
}

export enum AccountRoleProperty {
  "defaultAsset",
  "sharedAsset",
  "savingAsset",
  "ccAsset",
  "cashWalletAsset",
  "null",
}

export enum CreditCardTypeProperty {
  "monthlyFull",
  "null",
}

export enum LiabilityTypeProperty {
  "loan",
  "debt",
  "mortgage",
  "null",
}

export enum LiabilityDirectionProperty {
  "credit",
  "debit",
  "null",
}

export enum InterestPeriodProperty {
  "weekly",
  "monthly",
  "quarterly",
  "half-year",
  "yearly",
  "null",
}
