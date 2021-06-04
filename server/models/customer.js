const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    balance: Number
})


const Customer = mongoose.model('customer', customerSchema)


module.exports = Customer