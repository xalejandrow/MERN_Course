const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;

//Middleware
app.use(express.json());
app.use(morgan('tiny'));


//  http://localhost:3000/api/v1/products
app.get(`${api}/products`, (req, res)=>{
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_url'
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((erro)=>{
    console.log(err);
})

app.listen(3000, () => {
    console.log(api);
    console.log('server is running http://localhost:3000');
})