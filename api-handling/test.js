import axios from 'axios'
import { rqst } from './helper.js'
import { TOKEN } from './config.js'


const config = {
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json'
    }
}

const xConfig = {
    baseURL: 'https://api.xurrent.qa/v1',
    headers: {
        'content-type': 'application/json',
        'x-xurrent-account': 'helphubtech',
        'Authorization': TOKEN
    },
    data: {
        template: '136007',
        note: 'request from bot test'
    }
}

const res = await rqst('post', '/requests', xConfig)
console.log(res.status)
console.log(res.headers)
console.log(res.data);