const request = require('request');
const process = require('process');

const bookObj = {
  printAllBookList() {
    let data = [];
    request.get('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
      if (error === null && response.statusCode === 200) {
        data = JSON.parse(body);
        data.forEach((item) => {
          console.log(`${item.id} ${item.name}`);
        });
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
  printBookList(bookLimit = 20) {
    let data = [];
    request.get(`https://lidemy-book-store.herokuapp.com/books?_limit=${bookLimit}`, (error, response, body) => {
      if (error === null && response.statusCode === 200) {
        data = JSON.parse(body);
        data.forEach((item) => {
          console.log(`${item.id} ${item.name}`);
        });
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
  findBook(id) {
    let data = [];
    request.get(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response, body) => {
      if (error === null && response.statusCode === 200) {
        data = JSON.parse(body);
        if (Object.keys(data).length === 0) {
          console.log('找不到資料');
        } else {
          console.log(`${data.id} ${data.name}`);
        }
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
  delBook(id) {
    request.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response) => {
      if (error === null && response.statusCode === 200) {
        console.log('資料刪除成功');
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
  createdBook(bookName) {
    const obj = {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: bookName,
      },
    };
    request.post(obj, (error, response) => {
      if (error === null && response.statusCode === 201) {
        console.log(`書籍新增成功：書名 ${bookName}`);
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
  updataBook(id, bookName) {
    const obj = {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: {
        name: bookName,
      },
    };
    request.patch(obj, (error, response) => {
      if (error === null && response.statusCode === 200) {
        console.log(`書籍更新成功：id ${id} 書名 ${bookName}`);
      } else {
        console.log(`呼叫 API 時發生錯誤！ 狀態碼 ${response.statusCode}, 錯誤訊息 ${error}`);
      }
    });
  },
};
switch (process.argv[2]) {
  case 'all':
    bookObj.printBookList();
    break;
  case 'list':
    bookObj.printAllBookList();
    break;
  case 'read':
    if (process.argv[3]) {
      bookObj.findBook(process.argv[3]);
    } else {
      console.log('你需要指定一個數字才能查詢');
    }
    break;
  case 'delete':
    if (process.argv[3]) {
      bookObj.delBook(process.argv[3]);
    } else {
      console.log('你需要指定一個數字才能刪除');
    }
    break;
  case 'create':
    if (process.argv[3]) {
      bookObj.createdBook(process.argv[3]);
    } else {
      console.log('你需要有書名才能新增');
    }
    break;
  case 'update':
    if (process.argv[3] && process.argv[4]) {
      bookObj.updataBook(process.argv[3], process.argv[4]);
    } else {
      console.log('你需要有id 以及 書名才能更新');
    }
    break;
  default:
    console.log('我不明白你的意思，請重新輸入');
    break;
}
