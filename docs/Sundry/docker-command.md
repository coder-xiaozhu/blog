# Docker常用指令

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
