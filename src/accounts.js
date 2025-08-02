import {default as sqlConnection} from './connectors/sql.js'
import {v4 as uuidv4} from 'uuid'

export const createAccount  = (customerId,bank_branch) => {
const  accountId = 'BARC-' + uuidv4()
const todaysDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
const sql = `INSERT INTO users.accounts_table(AccountID,CustomerID,Bank_Branch,Created,Last_Updated) VALUES ('${accountId}','${customerId}','${bank_branch}','${todaysDate}','${todaysDate}')`
  sqlConnection.query(sql, function (err) {
    if (err) throw err;
    console.log("New account created: %s",customerId)
    return false
  })
  return true
}


export const getAccount  = (accountId) => new Promise((resolve,reject) => {
const sql = `Select AccountID,CustomerID,Bank_Branch from users.accounts_table where AccountID='${accountId}'`
    sqlConnection.query(sql, (err, result) => {
    if (err) reject(err)
    resolve(JSON.parse(JSON.stringify(result[0])))
})})






