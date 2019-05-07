const request = require('request');

const bookLimit = 10;
let data = [];
request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${bookLimit}`, (error, response, body) => {
  data = JSON.parse(body);
  data.forEach((item) => {
    console.log(`${item.id} ${item.name}`);
  });
});
