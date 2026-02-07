import express from 'express'
import { webhook, pload } from './payload.js';

const app = express()
const PORT = 3000

app
.get('/', (req, res) => {
    res.send('Hello World!');
})
.get('/gethook', (req, res) => {
    res.header('content-type', 'application/json');

    const webhookstr = JSON.stringify(webhook);
    res.send(webhookstr);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})