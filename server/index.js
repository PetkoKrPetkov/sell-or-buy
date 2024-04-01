const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors');
const auth = require('./src/middlewares/auth');
const furnitureController = require('./src/controllers/furniture');
const usersController = require('./src/controllers/users');


async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/sell-or-buy');

        console.log('DB Ready');
    } catch (err) {
        console.log('Error connecting to database');
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true,
      }));

     app.use((req, res, next) => {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');
    
        next();
    }) 
    app.use(auth());

    app.use('/data/catalog', furnitureController);
    app.use('/users', usersController);

    app.listen(3030, () => console.log('REST Service started on port 3030'));
}


start();