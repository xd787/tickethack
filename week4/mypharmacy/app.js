// Insert your code here
const drugs = require("./data");

// fonctions présentes dans le pharmacy.test.js
function getDrugDescriptionByName(name) {
  for (let drug of drugs) {
    if (drug.name === name) {
      return drug.description;
    }
  }
}

function getDrugTypeByName(name) {
  for (let drug of drugs) {
    if (drug.name === name) {
      return drug.type;
    }
  }
}

function getDrugNamesByGroup(group) {
  let array = [];
  for (let drug of drugs) {
    if (drug.groups.includes(group)) {
      array.push(drug.name);
    }
  }
  return array.sort();
}

module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };
