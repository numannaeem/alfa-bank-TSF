const express = require('express')
const Customer = require('../models/customer');
const Transaction = require('../models/transaction');

const router = express.Router();

router.get('/test', async (req,res) => {
    res.send("Hello World")
    res.end()
})

router.get('/customers', (req,res) => {
    Customer.find().then((data) => {
        res.send(data)
    })
})

router.get('/transactions', (req,res) => {
    Transaction.find().then((data) => {
        res.send(data)
    })
})

router.post('/new_transaction', (req,res) => {
    const newTransaction = req.body
    Transaction.create(newTransaction).then(() => {
        res.send("Succesfully transferred")
    }).catch((err) => {
        throw new Error(err.message)
    })
})


module.exports = router