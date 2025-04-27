const express = require('express')
const {Serverconfig} = require('./config')
const apiRoutes = require('./routes/index')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRoutes)

app.listen(Serverconfig.PORT, () => {
    console.log(`Server started on ${Serverconfig.PORT}`)
})

