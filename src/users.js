import {default as sqlConnection} from './connectors/sql.js'
import {v4 as uuidv4} from 'uuid'

export const createUser  = (firstname,lastname,address) => {
const  customerId = uuidv4()
const todaysDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
const sql = `INSERT INTO users.user_table (CustomerID,FirstName, LastName,Address,Created,Last_Updated) VALUES ('${customerId}','${firstname}','${lastname}','${address}','${todaysDate}','${todaysDate}')`
  sqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return false
  })
  return true
}


export const getUser  = (customerId) => new Promise((resolve,reject) => {
const sql = `Select  FirstName, LastName,Address from users.user_table where customerID='${customerId}'`
    sqlConnection.query(sql, (err, result) => {
    if (err) reject(err)
    resolve(JSON.parse(JSON.stringify(result[0])))
})})



