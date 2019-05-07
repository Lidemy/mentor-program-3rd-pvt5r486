const request = require('request');
const process = require('process');

const bookObj = {
  printBookList(bookLimit = 20) {
    let data = [];
    request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${bookLimit}`, (error, response, body) => {
      data = JSON.parse(body);
      data.forEach((item) => {
        console.log(`${item.id} ${item.name}`);
      });
    });
  },
  findBook(id) {
    let data = [];
    request.get(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response, body) => {
      data = JSON.parse(body);
      console.log(`${data.id} ${data.name}`);
    });
  },
};
switch (process.argv[2]) {
  case 'list':
    bookObj.printBookList();
    break;
  case 'read':
    if (process.argv[3]) {
      bookObj.findBook(process.argv[3]);
    } else {
      bookObj.printBookList();
    }
    break;
  default:
    console.log('我不明白你的意思，請重新輸入');
    break;
}
