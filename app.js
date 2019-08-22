const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('./util/database').mongodbConnected;

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const app = express();


app.use(bodyParser.json()); // Postman 
app.use(bodyParser.urlencoded({ extended: true })); // Para Postman
// app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use('/admin', adminRoutes);
app.use(userRoutes);

mongoConnect(() => {
    app.listen(3000);
    console.log('Server running at port 3000!');
});