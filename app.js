import { createUser } from './src/users.js'
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
        // res.sendStatus(400)
    return
    }
    const status = createUser(name,surname,address) ? 200 : 400
    res.sendStatus(status)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
