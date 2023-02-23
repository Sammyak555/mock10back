const express = require('express');
const { FlightModel } = require('../Models/flight.model');

const FlightRouter = express.Router()

FlightRouter.use(express.json())

FlightRouter.post('/flights',async(req,res)=>{
    const {airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} = req.body
    try{
        let flight = new FlightModel({airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price})
        await flight.save()
        res.send('Successfully added flight details !')
    }catch(err){
        res.send(err)
    }
})

FlightRouter.get('/flights',async(req,res)=>{
    try{
        const flights = await FlightModel.find()
         res.send(flights)
     }catch(err){
         res.send(err.message)
     }
})

FlightRouter.patch('/flights/:id',async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    try{
            await FlightModel.findByIdAndUpdate({"_id":ID},payload)
            res.send("updated the flight !")  
    }catch(err){
        res.send("Somthing went wrong while updating !")
    }
})
FlightRouter.get('/flights/:id',async(req,res)=>{
    const id=req.params.id
    try{
       const flight =  await FlightModel.findById({"_id":id})
        res.send({"msg":"Showing flight Successfuly!","flight":flight})

    }catch(err){
        res.send(err)
    }
})
FlightRouter.delete('/flights/:id',async(req,res)=>{
    const id=req.params.id
    try{
       const flight =  await FlightModel.findByIdAndDelete({"_id":id})
        res.send("flight deleted !")
    }catch(err){
        res.send(err)
    }
})



module.exports={
    FlightRouter
}