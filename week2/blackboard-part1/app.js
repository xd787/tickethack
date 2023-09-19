const db = require("./database/setup"); // Do not edit/remove this line

//const _id = articleId;
//const price = newPrice;
//const stock = newStock;

function displayAllArticles() {
  db.find().then(data => {
    console.log(data);
  });
}

function displayArticleByName(articleName) {
  db.findOne({ name: articleName }).then(data => {
    console.log(data);
  });
}

function displayArticleByID(articleId) {
  db.findById(articleId).then(data => {
    console.log(data);
  });
}
function updateArticlePrice(articleId, newPrice) {
  db.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
    db.find().then(data => {
      console.log(data);
    });
  });
}

function updateArticleStock(articleId, newStock) {
  db.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
    db.find().then(data => {
      console.log(data);
    });
  });
}

function resetStocks() {
  db.updateMany({}, { stock: 0 }).then(() => {
    db.find().then(data => {
      console.log(data);
    });
  });
}

//displayAllArticles();
//displayArticleByName("NKD");
//displayArticleByID("625ea9ca38d6a3276994651c");
//updateArticlePrice();
//updateArticleStock();
//resetStocks()
// Do not edit/remove code under this line
module.exports = {
  displayAllArticles,
  displayArticleByName,
  displayArticleByID,
  updateArticlePrice,
  updateArticleStock,
  resetStocks,
};
