// const express = require('express');
// const morgan = require('morgan');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();

// app.use(morgan('dev'));
// app.use(express.static('dist'));
// app.use(express.static('public'));

// app.get('/hello', (req, res) => {
//     res.send('hello')
//     console.log(JSON.stringify(city.data));
// });
// app.get('/SearchBar/:city', (req, res) => {
//     let { city } = req.params;
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0af3c70350fb298ba6e0c81bbf4177d6&units=imperial`)
//         .then(response => {
//             res.send(response.data)
//         })
//         .catch(err => console.log(err));
// });

// module.exports = app;