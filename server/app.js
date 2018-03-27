import path from 'path';
import express from 'express';

const publicPath = express.static(path.join(__dirname, '../'));

//====LIST DEPENDENCIES===//
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const app = express();
//const url = 'mongodb://localhost:27017/signatures';
const url = process.env.MONGOLAB_URI;

//=========================//
app.use(publicPath);
app.use(bodyParser.json())

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageofGuest,
  }).then(signature => {
    res.json(signature)
  });
});
//==========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//

export default app;
