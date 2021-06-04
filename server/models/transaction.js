const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    from: String,
    to: String,
    amount: Number,
    date: {type: Date, default: Date.now}  
})

const Transaction = mongoose.model('transaction', transactionSchema)

module.exports = Transaction
