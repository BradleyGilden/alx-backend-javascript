import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);
try {
  updateUniqueItems(map);
  console.log(map);
} catch (err) {
  console.log(err);
}