const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongodbConnected;

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const app = express();

// app.use(bodyParser.json()); // Postman 
// app.use(bodyParser.urlencoded({ extended: true })); // Para Postman
app.use(bodyParser.urlencoded({ extended: false }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Rotas
app.use('/admin', adminRoutes);
app.use(userRoutes);

mongoConnect(() => {
    app.listen(3000);
    console.log('Server running at port 3000!');
});