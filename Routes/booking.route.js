const express = require('express');
const { BookingModel } = require('../Models/booking.model');


const BookingRouter = express.Router()
BookingRouter.use(express.json())


BookingRouter.post('/booking',async (req,res)=>{
    const {user,flight} = req.body;

    try{
        let booking = new BookingModel({user,flight})
        await booking.save()
        res.send('Successfully Booked !')
    }catch(err){
        res.send(err)
    }
})
BookingRouter.get('/dashboard',async(req,res)=>{
    try{
        const bookings = await BookingModel.find()
         res.send(bookings)
     }catch(err){
         res.send(err.message)
     }
})



module.exports={
    BookingRouter
}