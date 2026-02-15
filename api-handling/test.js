import axios from 'axios'
import { rqst, COLUMN_MAPPING, getCustomFields } from './helper.js'
import { TOKEN, ATOKEN } from './config.js'
import { webhook, pload } from './payload.js'

const UUID = crypto.randomUUID().replaceAll('-', '')


const config = {
    baseURL: 'https://archangelical-mercedez-freakishly.ngrok-free.dev',
    headers: {
        'content-type': 'application/json',
        'ngrok-skip-browser-warning': '1'
    }
}

const aConfig = {
    baseURL: 'https://vexall:morpheus@automator-cl3.techwork.at/service/mr-price/sandbox/smartsheets/json/smartsheets',
    headers: {
        'content-type': 'application/json'
    },
    data: webhook
}

const aHealthCheck = {
    baseURL: 'https://vexall:morpheus@automator-cl3.techwork.at/service/mr-price/sandbox/smartsheets/json/smartsheets',
    headers: {
        'content-type': 'application/json',
        'Smartsheet-Hook-Response': UUID
    },
    data: pload
}

const xConfig = {
    baseURL: 'https://api.xurrent.qa/v1',
    headers: {
        'content-type': 'application/json',
        'x-xurrent-account': 'helphubtech',
        'Authorization': TOKEN
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

const res = await rqst('post', '', aConfig);
console.log(res.headers, res.data);

//res.data.smartsheetHookResponse === UUID ? console.log('health check succeeded') : console.log('health check failed');
//console.log(JSON.stringify(res.data.data.requestCreate.request, null, 2));
//console.log(JSON.stringify(res.data.data.requestCreate.errors, null, 2));