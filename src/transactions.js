import {default as sqlConnection} from './connectors/sql.js'
import {v4 as uuidv4} from 'uuid'

export const depositMoney  = (accountId,amount) => {
const  transactionId = 'T-' + uuidv4()
const todaysDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
const sql = `INSERT INTO users.transactions_table(AccountID,TransactionID,TransactionType,TransactionAmount,Created,Last_Updated) VALUES ('${accountId}','${transactionId}','deposit','${amount}','${todaysDate}','${todaysDate}')`
  sqlConnection.query(sql, function (err) {
    if (err) throw err;
    console.log("Deposit of %s made into account: %s",amount,accountId)
    return false
  })
  return true
}

export const withdrawMoney  = (accountId,amount) => {
const  transactionId = 'T-' + uuidv4()
const todaysDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
const sql = `INSERT INTO users.transactions_table(AccountID,TransactionID,TransactionType,TransactionAmount,Created,Last_Updated) VALUES ('${accountId}','${transactionId}','withdrawal','${amount}','${todaysDate}','${todaysDate}')`
  sqlConnection.query(sql, function (err) {
    if (err) throw err;
    console.log("Withdrawal of %s made from account: %s",amount,accountId)
    return false
  })
  return true
}







