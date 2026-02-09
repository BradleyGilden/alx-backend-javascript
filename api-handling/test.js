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

const xConfigGraph = {
    baseURL: 'https://graphql.xurrent.qa',
    headers: {
        'content-type': 'application/json',
        'x-xurrent-account': 'helphubtech',
        'Authorization': TOKEN
    },
    data: {
        query: `mutation {
    requestCreate(input: { subject: "Laptop Request", serviceInstanceId: "NG1lLnFhL1NlcnZpY2VJbnN0YW5jZS8yMzQ0NjA", note: "from graphql", category: "rfi" }) {
        errors {
            path
            message
        }
        request {
            id
            requestId
            subject
        }
    }
}`
    }
}

const res = await rqst('post', '', xConfigGraph)
console.log(res.status)
console.log(res.headers)
console.log(res.data);
console.log(JSON.stringify(res.data.data.requestCreate.request, null, 2));
//console.log(JSON.stringify(res.data.data.requestCreate.errors, null, 2));