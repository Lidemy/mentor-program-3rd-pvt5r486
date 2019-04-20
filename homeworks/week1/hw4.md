## 跟你朋友介紹 Git
### **什麼是 GIT**
GIT 是一個用 Linux 核心開發的分散式版本控制工具，與其它版本控制軟體不同(如：CVS、SVN 是屬於集中式的版控工具)，總之菜哥你目前只要知道這樣就夠了，至於什麼是分散、集中的定義之後有空再補。
* [分散式與集中式版控的差異](https://www.ithome.com.tw/node/77088)
### **為什麼要使用 GIT**
* **解決資料夾管理問題** - 以前如果不使用版本控制工具，只能靠新增資料夾，然後不斷的命名藉以區別哪個是第一版、第二版、最終版，很不方便。
* **可以多人協作** - 如果是使用資料夾來做版本控制，那如果你的助手要來幫你想笑話，是不是還要從你這複製一份資料夾？修改完之後再蓋回去，這還只是一個助手的情況，如果更多人就會更麻煩了。
### **常用的 GIT 指令**
* `git init` - 在資料夾中建立一個 .git 的隱藏資料夾，內含許多 git 必要的檔案，如果要使用種種 git 方便的功能，這個步驟是必要的起手式。
* `git add .` - 當對資料夾的內容做了任何的修改，如果我們希望把這些檔案加入 git 的版本控制追蹤中，則需要使用 `git add .` ，意思是全部都要加入追蹤，若單獨指定如 `git add test.txt` 則只針對該檔案。
* `git commit -m '訊息'` - 當檔案加入版本控制的追蹤後，接著是「建立版本控制」，這個動作好比過往我們開新的資料夾做版控一樣，透過 `git commit -m '訊息'` 建立一個 commit 點
* `git log` - 印出過往所有的 commit 記錄
* `git status` - 印出目前的檔案狀態，可使用此指令觀察是否有檔案沒有使用 `git add` 指令加入，或是還沒進行 `commit`
* `git remote -v` - 查詢目前遠端 repo 有哪些
* `git remote add 別名 [目標網址]` - 建立一個別名並將 目標repo 加入遠端，之後可以使用該別名連線到目標 repo
* `git push 別名 分支名` - 需要先使用 `git remote add 別名 [目標網址]` 建立後才可使用該功能，可將本地端的分支推上遠端分支
* `git pull 別名 分支名` -  需要先使用 `git remote add 別名 [目標網址]` 建立後才可使用該功能，可將遠端分支的進度同步到指定分支
#### 另外，`git pull` 是 `git fetch` + `git merge` 的組合指令
* 額外補充 - [為你自己學 Git - Pull 下載更新](https://gitbook.tw/chapters/github/pull-from-github.html)
### **如何使用 GIT**
接著我們來說說如何開始使用 GIT
* 至 [Git](https://git-scm.com/) 官方下載 Git
* 然後執行 Git Bash 這支程式
* 使用 `cd` 指令切換到你要使用 Git 版本控制的資料夾
* 輸入 `git init`
* 然後你就可以開始寫那些很烙賽的笑話了，像是「化蜆為姨」、「五十五克，劍道女生」這種很尷尬的...。
* 寫完之後記得使用 `git add .` 把檔案全部加入追蹤，因為 Git 很笨，你必須告訴它哪些是你想加入版本控制的檔案。
* 接著使用 `git commit -m '菜哥的笑話'` ，正式提交成一個版本
### **跟別人分享笑話 Github**
先跟你解釋一下 Github 是什麼：
> GitHub 是透過 Git 進行版本控制的軟體原始碼代管服務網站，我們可以把在本機建立的 repo 使用 `git push 別名 分支名` 指令放到 Github 網站上，這樣子大家就可以看到你的笑話了。
#### 具體的做法：
* 註冊 Github 帳號
* 建立一個新的 repositories (簡稱 repo)
* 接著會得到一串網址如：https://github.com/pvt5r486/myBlog.git
* 執行 Git Bash
* 使用 `cd` 指令切換到有使用 Git 版本控制的資料夾
* 輸入 `git remote add 別名 [目標網址]` ，這邊別名可以隨意輸入，目標網址則填入剛剛那一串網址即可。
* 輸入 `git remote -v` ，查詢是否成功新增遠端 repo
* 輸入 `git push 別名 分支名` ，這邊的別名就是剛剛自己設定的別名，由於目前要推上 Github的分支是 master ，所以輸入 `master` 即可。
#### 至此，菜哥你的笑話就放上 Github 囉！
當然關於 Git 的操作不只這些，不過若是想要簡單的體驗 Git 會這些東西就足夠了呢！放上一些我常常去的網站給你參考看看：
* [為你自己學 Git](https://gitbook.tw/)
* [30 天精通 Git 版本控管](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md)
* [掌握 Git & Github 程式時光機](https://www.udemy.com/learninggit/learn/v4/overview)
* [GIT101 超新手入門](https://www.lidemy.com/courses/enrolled/379441)

