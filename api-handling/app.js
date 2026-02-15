import express from 'express'
import { webhook, pload, pload2 } from './payload.js';

// To remove this page:
// Set and send an ngrok-skip-browser-warning request header with any value.
// Or, set and send a custom/non-standard browser User-Agent request header.
// Or, please upgrade to any paid ngrok account.

const app = express()
const PORT = process.env.PORT || 3000

app
.get('/', (req, res) => {
    res.send('Hello World!');
})
.get('/gethook', (req, res) => {
    res.header('content-type', 'application/json');

    const webhookstr = JSON.stringify(webhook);
    res.send(webhookstr);
}).get('/sheets/:sheetId/rows/:rowId', (req, res) => {
    res.header('content-type', 'application/json');
    if (req.params.sheetId == 1229759569678212) {
        req.params.rowId == pload.id ? res.send(pload) : res.send(pload2)
    } else res.send('req failed');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})