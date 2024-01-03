import express from 'express'
import connectDB from './config/db.js'
import Messages from './models/dbMessages.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 9000


dotenv.config({ path: './config/config.env' })
connectDB()


const pusher = new Pusher({
    appId: "1631491",
    key: "348a3182023a540701f0",
    secret: "c9076c1419afdd6cb9fb",
    cluster: "us2",
    useTLS: true
});

const db = mongoose.connection;
db.once('open', () => {
    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change) => {
        console.log('change', change)
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name:messageDetails.name,
                message:messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
        } else {
            console.log('Error triggering pusher')
        }
    });
});

app.use(express.json({ extended: false}))
app.use(cors())

app.get('/', (req, res) => res.status(200).send('hello world'))

app.get('/messages/sync', async (req, res) => {
    try{
        const messages = await Messages.find()
        res.status(200).send(messages)
    } catch (err){
        res.status(500).send(err)
    }
})

app.post('/messages/new', async (req, res) => {
    const dbMessage = req.body
    try {
        const message = await Messages.create(dbMessage)
        res.status(200).send(message)
    } catch(err){
        res.status(500).send(err)
    }
})

app.listen(port, ()=>console.log(`Listening on localhost:${port}`))