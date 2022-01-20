const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express();


dotenv.config()

app.use(morgan('dev'))
app.get('/', (req, res) => {
    res.send('hi am express')
})



PORT = process.env.PORT

app.listen(PORT, 
    console.log(`Server is running on ${process.env.NODE_ENV} mode at ${process.env.PORT}`)
    )