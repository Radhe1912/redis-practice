const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express()

app.get('/', async (req, res)=>{
    const cachedData = await client.get('todos');
    if (cachedData) return res.json(cachedData);
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.json(data);
});

app.listen(9000, ()=>{
    console.log("server started");
});