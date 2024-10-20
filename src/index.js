const express = require('express');
const app = express();

const connect = require('./config/database');

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    // });
    const tweets = await Tweet.find({});
    console.log(tweets);
});    