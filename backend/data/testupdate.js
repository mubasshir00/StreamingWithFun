var MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const { default: Redis } = require('ioredis');
const { redis } = require('../redis_connect');
var url =
  'mongodb+srv://mubasshir:mubasshir@cluster0.ichih91.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  var dbo = db.db('game-server');
  let insertUser = 100;
  for (var i = 1; i <= insertUser; i++) {
    var response = await axios.get('https://randomuser.me/api/', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //console.log(response.data.results[0]);
    var user = response.data.results[0];
    var date = new Date();
    date.setFullYear(date.getFullYear() - user.dob.age);
    var obj = {
      created_at: new Date(),
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1NiwiaWF0IjoxNjQ5ODQyNjIwLCJleHAiOjE2NDk4NjQyMjB9.m4nbi1Hzgb-xrCCs0pwH-BGixGU75_GtM0xEfvCGOhI',
      currency: 'Tk',
      credit: 0,
      exp: 0,
      coin: 99000,
      status: 'active',
      referred_by: '',
      reference_key: '1649842620036',
      share_link: 'share_link',
      auth_type: 'Google',
      auth_id: Date.now().toString(),
      country: '',
      gender: user.gender,
      birth_date: date,
      email: user.email,
      profile_image: user.picture.medium,
      name: `${user.name.first} ${user.name.last}`,
      updated_at: new Date(),
      user_id: i,
    };

    // dbo.collection("users").insertOne(obj, async function (err, res) {
    //   if (err) throw err;
    //   console.log(obj);
    //   console.log(`user ${i} inserted`);

    //   redis.set(
    //     `user_id_${obj.user_id}`,
    //     JSON.stringify({
    //   name: obj.name,
    //   profile_image: obj.profile_image,
    //   user_id: obj.user_id,
    //     })
    //   );
    // });

    let test = dbo
      .collection('users')
      .find()
      .toArray(async function (err, result) {
        if (err) throw err;
        // console.log("result",result.length);
        for (let i = 0; i < result.length; i++) {
          console.log(result[i].user_id);
          await redis.set(
            `user_id_${result[i].user_id}`,
            JSON.stringify({
              name: result[i].name,
              profile_image: result[i].profile_image,
              user_id: result[i].user_id,
            })
          );
        }
        db.close();
      });

    let game_id_list = [1, 4, 5, 6, 7, 8, 9, 10];

    let test1 = dbo
      .collection('eventdetails')
      .find()
      .toArray(async function (err, result) {
        if (err) throw err;
        console.log('result', result.length);
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < game_id_list.length; j++) {
            for (let z = 1; z < 100; z++) {
              await redis.zincrby(
                `rank_event_id_${result[i].event_id}_game_id_${game_id_list[j]}`,
                Math.floor(Math.random() * 1000) + 1,
                z
              );
            }
          }
        }
        // db.close();
      });

    // console.log(test);
  }
  // await db.close();
  /* var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  }); */
});
