# CentOS-8配置阿里云yum源

## 进入配置目录
 `cd /etc/yum.repos.d/`

## 备份原yum源
 `cp CentOS-Linux-Base.repo CentOS-Linux-Base.repo.backup`
 `cp CentOS-Extras.repo CentOS-Extras.repo.backup`
 `cp CentOS-Base.repo CentOS-Base.repo.backup`

## 下载aliyun源
 `wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo`
 
## 修改yum源
 1. 用`vim`打开文件`CentOS-Linux-AppStream.repo`、`CentOS-Linux-Extras.repo`，将原来的`mirrorlist`给注释掉  
 2. 然后将`baseurl`取消注释,修改为:
  `baseurl=https://mirrors.aliyun.com/centos/$releasever-stream/extras/$basearch/os/`