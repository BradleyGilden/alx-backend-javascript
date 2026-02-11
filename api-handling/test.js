import axios from 'axios'
import { rqst, COLUMN_MAPPING, getCustomFields } from './helper.js'
import { TOKEN, ATOKEN } from './config.js'
import { webhook } from './payload.js'


const config = {
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json'
    }
}

const xConfig = {
    baseURL: 'https://automator-cl3.techwork.at/webhook/mr-price/sandbox/smartsheets',
    headers: {
        'content-type': 'application/json',
        'Authorization': ATOKEN
    },
    data: webhook
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

const res = await rqst('get', '/getrow/2862041824825220', config);
const custom_fields = getCustomFields(res.data.cells, COLUMN_MAPPING);
console.log(custom_fields)
//console.log(JSON.stringify(res.data.data.requestCreate.request, null, 2));
//console.log(JSON.stringify(res.data.data.requestCreate.errors, null, 2));