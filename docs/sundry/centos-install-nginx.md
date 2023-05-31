# 解决Centos下安装Nginx安装错误：No package nginx available 问题

## 备份repo(防止修改错误还能还原)

  ```bash
    mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
  ```

## 下载新的`CentOS-Base.repo`到 `/etc/yum.repos.d/`

  ```bash
    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-[system-version].repo
  ```
  或者
  ```bash
    curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-[system-version].repo
  ```

## 把服务器的包信息下载到本地电脑缓存起来，`makecache`建立一个缓存

  ```bash
      yum makecache
  ```

## 运行安装`rpel`源命令，安装完成之后你就可以直接使用`yum`来安装额外的软件包，也就是`epel`源

  ```bash
    yum install epel-release
  ```

## 运行安装命令
  ```bash
   yum install nginx
  ```


  