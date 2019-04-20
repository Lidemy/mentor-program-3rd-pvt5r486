## 交作業流程

### 1. 首先必須 clone 一份作業 repo ，這個動作只需要做一次，實際作法如下：
* 取得 目標 repo 網址，如 [https://github.com/Lidemy/mentor-program-3rd-pvt5r486.git](https://github.com/Lidemy/mentor-program-3rd-pvt5r486.git)
* 打開 cmder 或者 git bash 或者 vscode 等等能使用 git 指令的終端
* cd 切換到目標資料夾內，並且 git clone https://github.com/Lidemy/mentor-program-3rd-pvt5r486.git
### 2. 接著開始寫作業囉，之後都從此步驟開始循環，實際作法如下：
* 檢查 / 確認當前分支，輸入 `git branch`，前面有 * 號代表目前所處分支
* 若無，則輸入 `git branch 分支名`
* 輸入 `git checkout 分支名`，切換至該分支
* 開始寫作業
### 3. 寫完後把檔案加入 git 版本控制
* 再次確認目前所處分支是否為當周作業分支
* 輸入 `git add .` 將所有檔案加入追蹤
* 輸入 `git commit -m '訊息內容'` ，須特別注意 '' 內不可使用空白分隔字句
### 4. 推至 Github 上的作業 repo ，發 issue 到作業批改的 repo
* 輸入 `git push origin 分支名`，將所處分支推上
* 此時 Github 網頁上應該會有個提示，會要求發送 Pull Request
* 填妥內容後，按下發送請求
* 接著到[第三期交作業的地方](https://github.com/Lidemy/homeworks-3rd)，開個 issue ，並**按照固定格式填寫標題**，否則會被機器人殺掉。
* 批改完作業都沒問題後 issue 會被關閉， Pull Request 申請會被同意
### 5. 拉回最新的 master 且刪除分支，爾後周次作業遵循 2 ~ 5 步驟
* 輸入 `git checkout master`，切換至該分支
* 輸入 `git pull origin master`，拉回最新的 master 進度
* 輸入 `git branch -d 欲刪除分支名`，刪除分支


