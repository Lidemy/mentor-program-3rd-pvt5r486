``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 12 行的 isValid 函式，並傳入一組陣列
2. 進入第 3 行的 for 迴圈， i 從 0 開始，如果 i < 傳入陣列的長度時執行迴圈內容，每次執行迴圈後 i 都會 +1
3. 如果 arr 的第 i 個元素 <= 0 ，回傳 invalid 字串 ， 當回傳時跳出 isValid 函式
4. 陣列的第一個元素為 3 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 0 ，執行迴圈後 i 為 1 
5. 陣列的第二個元素為 5 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 1 ，執行迴圈後 i 為 2 
6. 陣列的第三個元素為 8 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 2 ，執行迴圈後 i 為 3 
7. 陣列的第四個元素為 13 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 3 ，執行迴圈後 i 為 4  
8. 陣列的第五個元素為 22 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 4 ，執行迴圈後 i 為 5  
9. 陣列的第六個元素為 35 ， 未滿足 if 條件，繼續執行迴圈，當前 i 值為 5 ，執行迴圈後 i 為 6 
10. 嘗試執行下一次的迴圈時，未滿足進入迴圈條件 ( i < arr.length ) ，程式繼續往下執行
11. 進入第 6 行的 for 迴圈， i 從 2 開始，如果 i < 傳入陣列的長度時執行迴圈內容，每次執行迴圈 i 都會 +1
12. 如果 arr 的第 i 個元素 !== arr 的第 i - 1 個元素 + arr 的第 i - 2 個元素，回傳 invalid 字串 ， 當回傳時跳出 isValid 函式
13. arr 的 3 個元素為 8 ， arr 的 2 個元素為 5 ，  arr 的 1 個元素為 3 ，總和為 8 ，未滿足 if 條件，繼續執行迴圈，當前 i 值為 2 ，執行迴圈後 i 為 3 
14. arr 的 4 個元素為 13 ， arr 的 3 個元素為 8 ，  arr 的 2 個元素為 5 ，總和為 13 ，未滿足 if 條件，繼續執行迴圈，當前 i 值為 3 ，執行迴圈後 i 為 4 
15. arr 的 5 個元素為 22 ， arr 的 4 個元素為 13 ，  arr 的 3 個元素為 8 ，總和為 21 ，滿足 if 條件，回傳 invalid ，跳出函式
16. 若跑到不滿足進入迴圈條件時，則繼續往下執行程式碼，回傳 valid 字串