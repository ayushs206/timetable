require('dotenv').config();

const express = require('express')
const app = express()

app.use(express.json());

const healthRoute = require('./routes/healthRoute')

app.use('/api/v1/health', healthRoute)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})