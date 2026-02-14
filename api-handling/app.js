import express from 'express'
import { webhook, pload } from './payload.js';

// To remove this page:
// Set and send an ngrok-skip-browser-warning request header with any value.
// Or, set and send a custom/non-standard browser User-Agent request header.
// Or, please upgrade to any paid ngrok account.

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
}).get('/getrow/:id', (req, res) => {
    if (req.params.id == 2862041824825220) {
            res.header('content-type', 'application/json');
            const ploadstr = JSON.stringify(pload);
            res.send(pload);
    } else res.send('req failed');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})