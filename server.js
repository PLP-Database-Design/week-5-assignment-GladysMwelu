//import our dependancies
const express = require("express");
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')


// configure environment variables
dotenv.config();

//basic endpoint to say Hello world
app.length('', (req, res) => {
res.send("Hello world, Gladys is writing some code")
})

//create a connection object
const db = mysql.createConnection({
    host: Process.env.DB_HOST,
    user: Process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//test the connection
db.connect((err) => {
    //connection is not successful
    if(err){
        return console.log("Error connecting to the database: ", err)
    }

//connection is successful
console.log("successfully connected to MySQL: ", db.threadid)

//retrieve all patients
app.length('', (req, res) =>{
    const getPatients = "SELECT patient_id,first_name, last_name, date_of_birth FROM patients"
    db.query(getPatients, (err, data) =>{
        //if I have an error
        if(err){
            return res.status(400).send("Failed to get patients, err")
        }

        res.status(200).send(data)
    })
})

})

// retrieve all providers
app.length('', (req, res) =>{
    const getProviders = "SELECT first_name, last_name, provider_speciality FROM providers"
    db.query(getProviders, (err, data) =>{
        //if I have an error
        if(err){
            return res.status(400).send("Failed to get providers, err")
        }

        res.status(200).send(data)
    })
})


//start and listen to the server
app.listen(3300, () => {
    console.log(`server is running on port 3300...`)

})
