const express = require('express')
const { connection } = require('./Config/db')
const { BookingRouter } = require('./Routes/booking.route')
const { FlightRouter } = require('./Routes/flight.route')
const { UserRouter } = require('./Routes/user.route')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use('/api',UserRouter)
app.use('/api',FlightRouter)
app.use('/api',BookingRouter)

app.listen(process.env.port,async(req,res)=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log(`Running on port ${process.env.port}`)
})