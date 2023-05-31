# Linux常用指令

## **`ssh`**

`ssh username@hostname/ip`  使用username用户连接指定hostname/ip的服务器



## **`ls` 列出有关文件的信息(默认为当前目录)**
`ls [参数] [文件]`

 - -a，-all 显示当前目录下的目录名和文件名(包括隐藏文件以及'.'、'..')  
 - -A，--almost-all 显示当前目录下的目录名和文件名(除了'.'、'..')  
 -     --author 与 -l 一起使用,列出每个文件的作者  
 - -l 显示文件的详细信息,权限,所属用户(组),大小等,等同于 ll 命令  



## **`tail` 命令可用于查看文件的内容**
 `tail [参数] [文件] `

 - -f filename 循环读取文件内容,可用于日志观看(正在改变内容的日志)
 - -q 不显示处理信息
 -  -v 显示详细的处理信息
 - -c<数目> 显示的字节数
 -  -n<行数> 显示文件的尾部 n 行内容
 -  --pid=PID 与-f合用,表示在进程ID,PID死掉之后结束
 -  -q，--quiet, --silent 从不输出给出文件名的首部
 -  -s，--sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒



## **`less`**, 与 more 类似，less 可以随意浏览文件,支持翻页和搜索,支持向上翻页和向下翻页。
  `less [参数] 文件 `
  
-  -b <缓冲区大小> 设置缓冲区的大小
-  -e 当文件显示结束后，自动离开
-  -f 强迫打开特殊文件，例如外围设备代号、目录和二进制文件
-  -g 只标志最后搜索的关键词
-  -i 忽略搜索时的大小写
-  -m 显示类似more命令的百分比
-  -N 显示每行的行号
-  -o <文件名> 将less 输出的内容在指定文件中保存起来
-  -Q 不使用警告音
-  -s 显示连续空行为一行
-  -S 行过长时间将超出部分舍弃
-  -x <数字> 将"tab"键显示为规定的数字空格
-  /字符串 向下搜索"字符串"的功能
-  ?字符串 向上搜索"字符串"的功能
-  n 重复前一个搜索（与 / 或 ? 有关）
-  N 反向重复前一个搜索（与 / 或 ? 有关）
-  b 向上翻一页
-  d 向后翻半页
-  h 显示帮助界面
-  Q 退出less 命令
-  u 向前滚动半页
-  y 向前滚动一行
-  G 跳转到文件最后一行
-  g 跳转到文件第一行
-  v 使用配置的编辑器编辑当前文件
-  j 下一行
-  k 上一行
-  空格键 滚动一页
-  回车键 滚动一行
-  [pagedown] 向下翻动一页
-  [pageup] 向上翻动一页
-  &pattern 仅显示匹配模式的行，而不是整个文件
-  ctrl + F 向前移动一屏
-  ctrl + B 向后移动一屏
-  ctrl + D 向前移动半屏
-  ctrl + U 向后移动半屏


## **Centos 防火墙**
### 1. 查看防火墙状态
- 查看防火墙状态：`systemctl status firewalld`
- 开启防火墙：`systemctl start firewalld`
- 关闭防火墙：`systemctl stop firewalld`
- 禁用防火墙：`systemctl disable firewalld`
- 启用防火墙：`systemctl enable firewalld`
- 开启防火墙：`service firewalld start` 

> 若遇到无法开启
先用：`systemctl unmask firewalld.service`
然后：`systemctl start firewalld.service`

### 2. 查看对外开放的端口状态
- 查看开放了哪些服务端口：`firewall-cmd --list-all`
- 查询指定端口是否已开：`firewall-cmd --query-port=【port】/tcp` ，提示 `yes`，表示开启；`no`表示未开启。
- 对外开发端口查看想开的端口是否已开：`firewall-cmd --query-port=【port】/tcp`

### 3. 添加/删除开放的端口
- 添加指定需要开放的端口：`firewall-cmd --add-port=【port】/tcp --permanent`
- 移除指定端口：`firewall-cmd --permanent --remove-port=【port】/tcp`  

> 添加/删除完毕之后要执行`firewall-cmd --reload` 指令让配置立即生效


## **Centos 关闭SeLinux**
### 关闭SeLinux：
1. 临时关闭（不用重启机器）：
      - `setenforce 0 ##设置SELinux 成为permissive模式`
      - `##setenforce 1 设置SELinux 成为enforcing模式`
2. 修改配置文件需要重启机器：
    - 修改`/etc/selinux/config`文件
    - 将`SELINUX=enforcing`改为`SELINUX=disabled`
    - 重启机器即可

### 执行以下指令
`setsebool -P httpd_can_network_connect 1`

