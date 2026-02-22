import axios from "axios"
import { rqst, COLUMN_MAPPING, getCustomFields } from "./helper.js"
import { TOKEN, ATOKEN } from "./config.js"
import { webhook } from "./rowpayloadfinal.js"
import { pload } from "./payload.js"

const UUID = crypto.randomUUID().replaceAll("-", "")

const ssheets = {
  baseURL: "https://api.smartsheet.com/2.0/webhooks",
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer qJwCyOrWhrQmxCdYY5p4kOpc0M91PtDNamhlt",
  },
  data: {
    name: "My Specific Sheet Webhook",
    scope: "sheet",
    scopeObjectId: 5400134671093636,
    events: ["*.*"],
    callbackUrl:
      "https://vexall:morpheus@automator-cl3.techwork.at/service/mr-price/sandbox/smartsheets/json/smartsheets",
    version: 1,
  },
}

const ssheets1 = {
  baseURL: "https://api.smartsheet.com/2.0",
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer qJwCyOrWhrQmxCdYY5p4kOpc0M91PtDNamhlt",
  },
  // ,
  // data: {
  //     "enabled": true
  // }
}

const config = {
  baseURL: "https://archangelical-mercedez-freakishly.ngrok-free.dev",
  headers: {
    "content-type": "application/json",
    "ngrok-skip-browser-warning": "1",
  },
}

const aConfig = {
  baseURL:
    "https://vexall:morpheus@automator-cl3.techwork.at/service/mr-price/sandbox/smartsheets/json/smartsheets",
  headers: {
    "content-type": "application/json",
    "user-agent": "Smartsheet-Webhook",
  },
  data: webhook,
}

const aHealthCheck = {
  baseURL:
    "https://vexall:morpheus@automator-cl3.techwork.at/service/mr-price/sandbox/smartsheets/json/smartsheets",
  headers: {
    "content-type": "application/json",
    "Smartsheet-Hook-Response": UUID,
  },
  data: pload,
}

const xConfig = {
  baseURL: "https://api.xurrent.qa/v1",
  headers: {
    "content-type": "application/json",
    "x-xurrent-account": "helphubtech",
    Authorization: TOKEN,
  },
}

const xConfigGraph = {
  baseURL: "https://graphql.xurrent.qa",
  headers: {
    "content-type": "application/json",
    "x-xurrent-account": "helphubtech",
    Authorization: TOKEN,
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
}`,
  },
}
//?include=discussions,attachments,columns,columnType
const res = await rqst("post", "", aConfig)
console.log(res.headers, res.data)

//res.data.smartsheetHookResponse === UUID ? console.log('health check succeeded') : console.log('health check failed');
//console.log(JSON.stringify(res.data.data.requestCreate.request, null, 2));
//console.log(JSON.stringify(res.data.data.requestCreate.errors, null, 2));

