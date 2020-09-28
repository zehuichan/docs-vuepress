## git

### Create a new repository

```shell script
git clone http://xxx/abc.git
cd abc
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### Push an existing folder

```shell script
cd existing_folder
git init
git remote add origin http://xxx/abc.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Push an existing Git repository

```shell script
cd existing_repo
git remote rename origin old-origin
git remote add origin http://xxx/abc.git
git push -u origin --all
git push -u origin --tags
```

### git stash save 'xxx'

```shell script
git stash save 'save message' # 执行存储，添加备注，方便查找
git stash list # 查看stash了哪些存储
git stash show # 显示做了哪些改动，默认show第一个存储,如果要显示其他存贮
git stash show -p # 显示第一个存储的改动
git stash apply # 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储
git stash pop # 命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash
git stash drop stash@{$num} # 丢弃stash@{$num}存储，从列表中删除这个存储
git stash clear #删除所有缓存的stash
```
