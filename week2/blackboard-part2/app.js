// Add your own requires here 😉
require("./models/connection");
const Article = require("./models/articles");

/*
 ** Articles
 */

function displayAllArticles() {
  Article.find().then(data => {
    console.log("ARTICLES =>", data);
  });
}

function displayArticleByName(articleName) {
  Article.findOne({ name: articleName }).then(data => {
    console.log("ARTICLE =>", data);
  });
}

function displayArticleByID(articleId) {
  Article.findById(articleId).then(data => {
    console.log("ARTICLE =>", data);
  });
}

function updateArticlePrice(articleId, newPrice) {
  Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
    console.log(`Price updated for ${articleId}`);
  });
}

function updateArticleStock(articleId, newStock) {
  Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
    console.log(`Stock updated for ${articleId}`);
  });
}

function resetStocks() {
  Article.updateMany({}, { stock: 0 }).then(() => {
    console.log(`Stocks successfully reset`);
  });
}

const User = require("./models/users");
/*
 ** Users
 */

function displayAllUsers() {
  User.find().then(data => {
    console.log(data);
  });
}

function deleteUser(userId) {
  User.deleteOne({ _id: userId }).then(() => {
    User.find().then(data => {
      console.log(data);
    });
  });
}

const Order = require("./models/orders");
/*
 ** Orders
 */

function displayAllOrders() {
  Order.find().then(data => {
    console.log(data);
  });
}

function updateOrderPaymentStatus(orderId, isPaid) {
  Order.updateOne({ _id: orderId }, { isPaid: true }).then(() => {
    console.log(`status paiement for ${orderId}`);
  });
}

function deleteOrder(orderId) {
  Order.deleteOne({ _id: orderId }).then(() => {
    Order.find().then(data => {
      console.log(data);
    });
  });
}

// Do not edit/remove code under this line
module.exports = {
  displayAllArticles,
  displayArticleByName,
  displayArticleByID,
  updateArticlePrice,
  updateArticleStock,
  resetStocks,
  displayAllUsers,
  deleteUser,
  displayAllOrders,
  updateOrderPaymentStatus,
  deleteOrder,
};
