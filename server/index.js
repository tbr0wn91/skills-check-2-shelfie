const express = require('express');
const massive = require('massive');
require('dotenv').config();
const app = express();
app.use(express.json());

const { getAllProducts, addProduct } = require('./controller.');

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING).then(database => {
    app.set('database', database);
    console.log('All systems check on the database')
});


app.get('/api/inventory/', getAllProducts );

app.post('/api/product/', addProduct);









app.listen(SERVER_PORT, () => console.log(`We live from port ${SERVER_PORT}`))
