## git

### Create a new repository

```
git clone http://xxx/abc.git
cd abc
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### Push an existing folder

```
cd existing_folder
git init
git remote add origin http://xxx/abc.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Push an existing Git repository

```
cd existing_repo
git remote rename origin old-origin
git remote add origin http://xxx/abc.git
git push -u origin --all
git push -u origin --tags
```
