CREATE TABLE transactions_table (
  AccountID varchar(255) DEFAULT NULL,
  TransactionID varchar(255) DEFAULT NULL,
  TransactionType varchar(255) DEFAULT NULL,
  TransactionAmount float,
  Created date DEFAULT NULL,
  Last_Updated date DEFAULT NULL
)