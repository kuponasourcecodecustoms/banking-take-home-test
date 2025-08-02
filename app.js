import { createUser, getUser, deleteUser } from './src/users.js'
import { createAccount, getAccount } from './src/accounts.js'
import express from 'express'
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/v1/users', (req, res) => {
    const {name,surname,address} = req.body
    if(!name||!surname||!address){
        res.status(400).send('Please provide all expected information for user creation - Name, Surname, Address')
    return
    }
    const status = createUser(name,surname,address) ? 200 : 400
    res.sendStatus(status)
})

app.get('/v1/users/:customerID', async (req, res) => {
    const {customerID} = req.params
    const customerData = await getUser(customerID)
    res.send(customerData)
})

app.delete('/v1/users/:customerID', async (req, res) => {
    const {customerID} = req.params
    const status = await deleteUser(customerID) ? 200 : 400
    res.sendStatus(status)
})

app.post('/v1/accounts', (req, res) => {
    const {customerID,bank_branch} = req.body
    if(!customerID||!bank_branch){
        res.status(400).send('Please provide all expected information for bank account creation - CustomerID,Bank Branch')
    return
    }
    const status = createAccount(customerID,bank_branch) ? 200 : 400
    res.sendStatus(status)
})

app.get('/v1/accounts/:accountID', async (req, res) => {
    const {accountID} = req.params
    const accountData = await getAccount(accountID)
    res.send(accountData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
