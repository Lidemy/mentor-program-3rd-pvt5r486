## 請以自己的話解釋 API 是什麼
我覺得 API 就是一種應用程式的接口，就是一種我們不用管對方是透過什麼技術、什麼語言開發而成的軟體。
只要我們透過 API 按照約定的規範，就能夠存取、使用到對方提供的服務。

就好像是自動販賣機的規範，有些只收 10 元硬幣、有些只收百元鈔票，
必須按照它的規範投入硬幣、並且遵守訂定的規則按下對應按鍵，接著販賣機就會提供相應的飲料。
而這個過程我覺得與串接 API 是相當類似的。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 401 - 類似於403 Forbidden，401語意即「未認證」，即用戶沒有必要的憑據。該狀態碼表示目前請求需要用戶驗證。該回應必須包含一個適用於被請求資源的 WWW-Authenticate 資訊頭用以詢問用戶資訊。也就是我再進行本周第四個作業時，一開始遇到的問題，只要 clientID 錯誤就會跳 401 。
* 403 - 與401回應不同的是，身分驗證並不能提供任何幫助，而且這個請求也不應該被重複提交。拒絕執行，通常會看到 403 就是隨便惡搞一些網站的網址，有時候並不是跳出 404 而是 403，代表其實有這個頁面，只是被拒絕執行。
* 405 - 使用了伺服器不支援的請求方法，例如沒有開放使用 PUT 請求 ，卻使用 PUT 傳資料過去。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

網址 https://HoJa.herokuapp.com

### 所有餐廳資料
* Method - get
* 路徑 - /restaurant
* 參數 - :limit
* 範例 https://HoJa.herokuapp.com/restaurant?limit=10
* 範例說明：可回傳 10 筆餐廳資料

成功回應：
```
{
  "success": true,
  "restaurant":[
    {
      "id": 1,
      "name": "不好吃",
      "address": "台灣發大財市"
    },
    {
      "id": 2,
      "name": "好難吃",
      "address": "台灣天龍國"
    },
    ...
  ]
}
```

### 回傳單一餐廳資料
* Method - get
* 路徑 - /restaurant
* 參數 - :id
* 範例 https://restaurant.herokuapp.com/restaurant?id=5
* 範例說明：回傳 1 筆 id 等於 5 的餐廳資料

成功回應：
```
{
  "success": true,
  "restaurant":[
    {
      "id": 5,
      "name": "不好吃",
      "address": "台灣發大財市"
    },
  ]
}
```
### 刪除餐廳資料
* Method - delete
* 路徑 - /restaurant
* 參數 - :id
* 範例 https://restaurant.herokuapp.com/restaurant?id=7
* 範例說明：刪除 1 筆 id 等於 7 的餐廳資料

成功回應：
```
{
  "success": true,
  "message": "已刪除產品"
}
```
### 新增餐廳
* Method - post
* 路徑 - /restaurant
* 參數 - 
```
{
  "data": {
    "name": "可以吃",
    "address": "中國大陸我們懷念她市",
  }
}
```
* 範例 https://restaurant.herokuapp.com/restaurant

成功回應：
```
{
  "success": true,
  "message": "已新增餐廳資料"
}
```

### 修改餐廳
* Method - put
* 路徑 - /restaurant
* 參數 - :id
```
{
  "data": {
    "name": "好好滋",
    "address": "欸想地址很討厭想不到了市",
  }
}
```
* 範例 https://restaurant.herokuapp.com/restaurant?id=8
* 範例說明：修改 1 筆 id 等於 8 的餐廳資料

成功回應：
```
{
  "success": true,
  "message": "已修改餐廳資料"
}
```