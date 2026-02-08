import axios from "axios";

export async function rqst (method, url, config) {
  let res;
  const methods = ['get', 'post', 'patch', 'delete']
  if (methods.includes(method)) {
    if (config.data) {
      const {data, ...mainconfig} = config;
      res = await axios[method](url, data, mainconfig);
    } else {
      res = await axios[method](url, config);
    }
    return res;
  }
  else throw(`Invalid request method ${method}`);
}