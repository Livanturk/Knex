const express = require("express")
const app = express()
const router = require('./routes/routes')
app.use(express.json())
app.use(router)

app.listen(8081,() => console.log('Server listening on port 8081'))
