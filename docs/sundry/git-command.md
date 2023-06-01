# Git 常用指令

## Git基本概念
- `工作区`  本地仓库所在的目录，简而言之就是你在电脑上看到的目录，工作区的内容包含提交到暂存区和版本库的内容，也包含自己修改的内容  
- `暂存区`  本地仓库中的一个分支，用于存放工作区中的修改，是我们把修改提交版本库前的一个过渡阶段。查看GIT自带帮助手册的时候，通常以index来表示暂存区。在工作目录下有一个.git的目录，里面有个index文件，存储着关于暂存区的内容。git add命令将工作区内容添加到暂存区。  
- `本地仓库`  本地仓库中的一个分支，用于存放暂存区中的修改，版本控制系统的仓库，存在于本地。当执行git commit命令后，会将暂存区内容提交到仓库之中。在工作区下面有.git的目录，这个目录下的内容不属于工作区，里面便是仓库的数据信息，暂存区相关内容也在其中。这里也可以使用merge或rebase将远程仓库副本合并到本地仓库。图中的只有merge，注意这里也可以使用rebase。  
- `远程仓库`  位于远程服务器上的仓库，与本地仓库概念基本一致，不同之处在于一个存在远程，可用于远程协作，一个却是存在于本地。通过push/pull可实现本地与远程的交互。  

## 配置
`git config --global user.name <user-name>`  配置用户名  
`git config --global user.email <user-email>`  配置邮箱  
`git config --global core.ignorecase false`  开启区分大小写  
`git config --global --unset http.proxy`  取消代理  
`git remote set-url origin <repository-address>`  修改仓库地址  
`git config user.name`  查看用户名  
`git config user.email`  查看邮箱  


## 编辑Git配置文件
`git config --global -e`  编辑全局配置文件  
`git config -e`  编辑当前仓库配置文件  

## 初始化一个Git仓库
`git init`

## 为本地仓库添加远程仓库地址
`git remote add origin <repository-address>`

## 克隆
`git clone <repository-address>`

## 拉取代码
`git pull`  拉取代码并合并   
`git pull -r`  拉取代码并合并(强制)  

## 查看远程仓库地址
`git remote -v`

## 查看分支
`git branch`  查看当前分支  
`git branch -r`  查看远程分支  
`git branch -a` 查看所有分支  

## 切换分支
`git checkout <branch-name>`

## 创建分支
`git branch <branch-name>`  只创建分支   
`git checkout -b <branch-name>` 创建并切换分支   
`git baranch --set-upstream-to=origin/<branch-name> <branch-name>`  设置本地分支与远程分支的链接  

## 删除分支
`git branch -d <branch-name>`  删除本地分支  
`git push origin --delete <branch-name>`  删除远程分支  
 
 ## 合并分支
`git merge <branch-name>`  合并指定分支到当前分支

## 重命名分支
`git branch -m <old-branch-name> <new-branch-name>`  重命名指定分支  
`git branch -m <new-branch-name>`  重命名当前分支

## 删除暂存区文件
`git rm <file-name>` 删除暂存区文件，并删除本地文件  
`git rm -r <dir-name>` 删除暂存区文件，并删除本地文件  
`git rm -rf <dir-name>` 删除暂存区文件，并删除本地文件  
`git rm --cached <file-name>`  删除暂存区文件，但不删除本地文件  

## 查看当前状态
`git status`

## 添加文件到暂存区
`git add .`  添加所有文件到暂存区  
`git add -A`  添加所有文件到暂存区  
`git add -u`  添加所有修改和删除的文件到暂存区  
`git add <file-name>` 添加指定文件到暂存区  

## 提交暂存区到本地仓库
`git commit -m <commit-message>`

## 推送本地仓库到远程仓库
`git push`  推送本地仓库到远程仓库  
`git push -f`  推送本地仓库到远程仓库(强制)  
`git push origin <branch-name>`  推送本地仓库到远程仓库

## 查看提交日志
`git log`  查看提交日志  
`git log --oneline`  查看提交日志(简洁版)  
`git reflog`  查看提交日志(包含回滚)  

## 撤销修改
`git checkout <file-name>`  撤销指定文件的修改  
`git checkout .`  撤销所有文件的修改  

## 回滚
`git reset --hard <commit-id>`  回滚到指定提交    
`git reset --hard HEAD^`  回滚到上一次提交    
`git reset --hard HEAD^^`  回滚到上上次提交  
`git reset --hard HEAD~n`  回滚到上n次提交  
`git reset --soft <commit-id>`  回滚到指定提交，并保留修改  
`git reset --soft HEAD^`  回滚到上一次提交，并保留修改  
`git reset --soft HEAD^^`  回滚到上上次提交，并保留修改  
`git reset --soft HEAD~n`  回滚到上n次提交，并保留修改  
`git reset --mixed <commit-id>`  回滚到指定提交，并保留修改到暂存区  
`git reset --mixed HEAD^`  回滚到上一次提交，并保留修改到暂存区  
`git reset --mixed HEAD^^`  回滚到上上次提交，并保留修改到暂存区  
`git reset --mixed HEAD~n`  回滚到上n次提交，并保留修改到暂存区  

## 比较差异
`git diff`  比较工作区和暂存区的差异  
`git diff tmp` 比较本地tmp分支与远程origin/master分支的差别  
`git diff <commit-id>`  比较工作区和指定提交的差异   
`git diff <commit-id1> <commit-id2>`  比较两次提交的差异  

## 变基
`git rebase <branch-name>`  变基到指定分支  
`git rebase <branch-name1> <branch-name2>` 把分支1变基到分支2  
`git rebase --continue`  继续变基  
`git rebase --abort`  取消变基  

## 标签
`git tag`  查看所有标签  
`git tag <tag-name>`  创建标签  
`git tag -a <tag-name> -m <tag-message>`  创建带注释的标签  
`git tag -d <tag-name>`  删除标签  
`git push origin <tag-name>`  推送标签到远程仓库  
`git push origin --tags`  推送所有标签到远程仓库  
`git push origin :refs/tags/<tag-name>`  删除远程标签  

## 其他
`git stash`  暂存当前修改  
`git stash list`  查看暂存列表  
`git stash apply`  恢复暂存的修改  
`git stash drop`  删除暂存的修改  

## 下拉远程仓库所有内容
`git fetch --all`   

## cherry-pick
`git cherry-pick <commit-id>`  选择一个提交，合并到当前分支  
`git cherry-pick <commit-id1> <commit-id2>`  选择多个提交，合并到当前分支  
`git cherry-pick <commit-id1>..<commit-id2>`  选择一段连续的提交，合并到当前分支  
`git cherry-pick <commit-id1> <commit-id2> -n`  选择多个提交，合并到当前分支，但不提交  
`git cherry-pick <commit-id1> <commit-id2> -e`  选择多个提交，合并到当前分支，但不提交，编辑提交信息
