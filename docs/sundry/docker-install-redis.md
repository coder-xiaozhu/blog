# 在Docker中安装Redis

##  拉取Docker仓库中的Redis镜像 
 > `docker pull redis<:tag>`

## 使用拉取到的Docker镜像创建容器  
 > `docker run --name redis-dev -p 6379:6380  -v /usr/local/redis/dev/conf/redis.conf:/etc/redis/redis.conf -v /usr/local/redis/dev/data:/data -d redis<:tag> redis-server /etc/redis/redis.conf --appendonly yes`

---

> [`--name`]：给创建的容器命名  
> [`-p<:ip:><port:><port>`]：指定宿主机的ip和宿主机与容器的端口映射，ip不写就是映射所有接口地址，第一个端口不写就在启动时随机宿主机的端口，第二个端口不写就默认使用容器内部的程序所使用的端口  
> [`-v`]：数据卷，用户持久化保存容器内的数据、配置文件等  
> [`-d`]：表示在后台启动，不会占用当前终端  
> [`redis<:tag>`]：使用哪个镜像创建容器。如果 tag不写则寻找该镜像tag为lasted的镜像进行创建  
> [`redis-server /etc/redis/redis.conf`]：使用容器内路径为 `/etc/redis/redis.conf` 的配置文件  
> [`--appendonly yes`]：开启持久化  