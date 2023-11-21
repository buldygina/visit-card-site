const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, '../frontend/')))
app.get('/', (_, res) => {
    res.sendFile('index.html')
}) 
app.listen(8000)