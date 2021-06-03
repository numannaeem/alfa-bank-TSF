const express = require('express')
const Customer = require('../models/customer');
const Transaction = require('../models/transaction');

const router = express.Router();

router.get('/', async (req,res) => {
    res.send("RESTful API for Alfa Bank")
    res.end()
})

router.get('/customers', (req,res) => {
    Customer.find().then((data) => {
        res.json(data)
    })
})

router.get('/transactions', (req,res) => {
    Transaction.find().then((data) => {
        res.json(data)
    })
})

router.post('/new_transaction', async (req,res) => {
    const newTransaction = req.body
    const sender = await Customer.findOne({name: newTransaction.from})
    sender.balance -= newTransaction.amount
    await sender.save()
    const reciever = await Customer.findOne({name: newTransaction.to})
    reciever.balance += newTransaction.amount
    await reciever.save()
    Transaction.create(newTransaction).then(() => {
        res.send("Created succesfully!")
    }).catch((err) => {
        throw new Error(err.message)
    })
})


module.exports = router