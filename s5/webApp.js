const express = require("express")
const redis = require("redis")
const mongodb = require("mongodb")

const app = express()

// redis setup

const clientRedis = redis.createClient({
    host: 'redisserver'
})

clientRedis.on('connect', function() {
    console.log('Redis client connected');
});

clientRedis.set("access", 0, redis.print)

// -----

// mongdb setup

const MongoClient = mongodb.MongoClient
const urlMongDB = "mongodb://localhost:27017/acc"// service name 

// -----

app.get('/', (req, res) => {
    try {
        clientRedis.get("access",function(err,latestAccess) {
            if (err) {
                res.send('REDIS DK')
            }
            console.log(latestAccess)
            clientRedis.set("access", String(parseInt(latestAccess) + 1), redis.print)
            res.send("Num of accesses: " + String(latestAccess))
        }) 
    } catch(err) {
        res.send("REDIS DOWN" + String(err))
    }
})

app.listen(3030, () => {
    console.log("Listen on 3030")
})