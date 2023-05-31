# Docker常用指令

## Docker 搜索镜像
`docker search <image-name>`

## Docker 拉取镜像
`docker pull <image-name>`

## Docker 查看已经下载的镜像列表
`docker images`

## Docker 查看本地的容器列表
- `docker ps`    查看正在运行的容器列表
- `docker ps -a`  查看所有(正在运行和未在运行)的容器列表

## Docker 中查看容器日志
`docker logs <container-id>`

## Docker 宿主机和容器文件互相拷贝

### 把Docker容器中的文件拷贝到宿主机
-  **ContainerID**:容器id 
-  **filePath**:需要拷贝的容器中的文件绝对路径 
-  **savePath**:文件保存在宿主机中的路径  
**`docker cp <ContainerID:filePath> savePath`**

### 把Docker宿主机中的文件拷贝到容器
-  **ContainerID**:容器id 
-  **filePath**:需要拷贝的宿主机中的文件绝对路径 
-  **savePath**:文件保存在容器中的路径  
**`docker cp filePath <ContainerID:savePath>`** 
