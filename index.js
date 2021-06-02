const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/routes')

mongoose.connect('mongodb+srv://numan:nothing@clusterx.ptuxk.mongodb.net/TSFBank?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}, (err) => {
    if(err)
        console.log(err)
})

app = express();
app.use(express.json())
app.use(router)

app.listen(process.env.PORT || 5000);