const express = require('express')
const {PORT} = require('./config')

const app = express()

console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

