const express = require('express')
const { default: mongoose } = require('mongoose')

const bookingsSchema = mongoose.Schema({
    user : String,
	flight : String
})

const BookingModel = mongoose.model('booking',bookingsSchema)

module.exports={
    BookingModel
}