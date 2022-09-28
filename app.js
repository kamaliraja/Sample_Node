const express = require('express');    //install packages express, cors, config, mongoose
const cors = require('cors'); // cross origin
const config = require('config');

const url = config.get('db_url');   //db url
const app = express();

app.get('/', (req, res)=>{
  console.log('welcome....');
  res.status(200).send({
    message: 'welcome',
  });
})

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/welcome', (req, res) => {
    console.log('welcome....');
  res.status(200).send({
    message: 'welcome',
  });
});


app.use((req, res) => {
  const error = new Error('Not Found');
  error.status = 404;
  return res.status(404).send({
    message: 'Not found',
    error,
  });
});

const db = require('./db');

db.connect(url);
module.exports = app;