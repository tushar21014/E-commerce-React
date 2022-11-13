const connectToMongo = require('./db');
connectToMongo(); 
const express = require('express')
var cors = require('cors')
 

const app = express()
const port = 5001

app.use(cors())
app.use(express.json())
app.use('/api/auth', require("./Routes/auth"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
