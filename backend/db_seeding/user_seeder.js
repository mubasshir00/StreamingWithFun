var MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const bcrypt = require('bcryptjs');
const users = require('./../data/users')
var url =
  'mongodb+srv://mubasshir:mubasshir@cluster0.ichih91.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  var dbo = db.db('test');
  let insertUser = 100;
  
  for(let i=0;i<users.users.length;i++){
    let test = dbo
      .collection('users')
      .insertOne(users.users[i], async function (err, res) {
        if (err) throw err;
        console.log({ res });
      });
  }

});
