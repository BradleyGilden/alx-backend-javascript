import axios from "axios";
import https from "https";

const myaxios = axios.create({
httpsAgent: new https.Agent({
rejectUnauthorized: false
})
});

export async function rqst (method, url, config) {
  let res;
  const methods = ['get', 'post', 'patch', 'delete', 'put']
  if (methods.includes(method)) {
    if (config.data) {
      const {data, ...mainconfig} = config;
      res = await myaxios[method](url, data, mainconfig);
    } else {
      res = await myaxios[method](url, config);
    }
    return res;
  }
  else throw(`Invalid request method ${method}`);
}

/**
 * Maps column name
 * @param {Array<{columnId: number, value: string|number|boolean, displayValue: string, formula: string}>} cells - cells in row payload
 * @param {Map<number, string>} mapping - object containing column mapping
 * @returns {Array<{columnId: string, value: any, displayValue: string, formula: string}>}
 */
export function getCustomFields(cells, mapping) {
  const custom_fields = [];
  let custom_field_id
  
  for(let i = 0; i < cells.length; i++) {
    custom_field_id = mapping.get(cells[i].columnId)

    custom_field_id && custom_fields.push({
      id: custom_field_id,
      value: cells[i].displayValue
    });
  }
  return custom_fields;
}

export const COLUMN_MAPPING = new Map();
COLUMN_MAPPING.set(2969852729577348, 'original_incident_ref_');
COLUMN_MAPPING.set(8599352263790468, 'store_code');
COLUMN_MAPPING.set(366209195003780, 'faulty_product');
COLUMN_MAPPING.set(999527892602756, 'fault_description');
COLUMN_MAPPING.set(6980871147704196, 'reason_for_mrp_cost');
COLUMN_MAPPING.set(6066077473394564, 'date_of_purchase');
COLUMN_MAPPING.set(2688377752866692, 'replacement_product');
COLUMN_MAPPING.set(2336534031978372, 'replacement_quote_price');