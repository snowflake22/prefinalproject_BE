const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3306;
const bearerToken = require('express-bearer-token');

//Allowing API to grab data from web
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
//Token
app.use(bearerToken());

app.get('/', (req, res) => {
    res.status(200).send('<h1>Ini index.js utama</h1>');
})


//Check connection Express API Server to MYSQL Database
const { dbConf } = require('./config/db');
dbConf.getConnection((error,connection)=>{
    if(error){
        console.log('Express JS API Server and MySQL is not connected', error.sqlMessage)
    }
    
    console.log(`Express JS API Server is CONNECTED to MySql : ${connection.threadId}`);
})

//Config route middlewear
const { authRouter, postRouter, profileRouter } = require('./routers');
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/profile', profileRouter);

app.listen(PORT, () => {
    console.log(`Express JS API Server is running on port : ${PORT}`);
})