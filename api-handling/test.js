import axios from 'axios'


const config = {
    baseURL: 'http://localhost:3000',
    headers: {
        'content-type': 'application/json'
    }
}

const res = await axios.get('/gethook', config)
console.log(res.data);