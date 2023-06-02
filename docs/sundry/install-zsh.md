# zsh 和 oh my zsh 安装

## Ubuntu安装 zsh

### 安装zsh

```bash
sudo apt-get install zsh
```

## CentOS安装 zsh

### 安装zsh
```bash
sudo yum install zsh
```

## Windows安装 zsh
&emsp;&emsp; Windows可以使用Git-Bash来当作终端工具，Git请自行下载。[Git下载地址](https://git-scm.com/downloads)

### 安装zsh

- [下载zsh](https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64)
- 解压zsh压缩文件，推荐Bandizip
- 解压后你的文件中应该包含 `etc` 和 `usr` 类似字眼。将解压出来的所有文件，包含刚刚说的文件。复制到 `git-bash` 安装的根目录。可能会提示冲突，选择覆盖文件即可。

### Windows下修改默认shell

&emsp;&emsp;在用户根目录下的 `.bashrc` 文件中写入一下脚本，如果没有的话新建一个即可

```bash
if [ -t 1 ]; then
  exec zsh
fi
```

## Linux修改默认shell

```bash
chsh -s /bin/zsh
```
还可以用下面的指令切换回bash
    
```bash
chsh -s /bin/bash
```

## 安装oh my zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 修改主题
&emsp;&emsp;oh-my-zsh 有很多已经定义好的主题，在目录 ~/.oh-my-zsh/themes/ 下，可以看到这些主题，可以根据自己的喜好修改主题，修改主题后，需要重新打开终端才能看到效果。

```bash
vim ~/.zshrc

# 将`ZSH_THEME`这个 修改成你想要的主题名字即可
ZSH_THEME="bira"
```
&emsp;&emsp;修改好后可以使用下面的指令让终端立即生效。
```bash
source ~/.zshrc 
```

## 安装插件，推荐把插件安装在 ~/.oh-my-zsh/custom/plugins 目录下

### autojump

&emsp;&emsp;autojump 是一个快速跳转工具，可以根据你的历史记录，快速跳转到你想要的目录下，使用方法如下：

```bash
j [目录名]
```
#### 安装autojump

```bash
git clone git://github.com/joelthelion/autojump.git
cd autojump
./install.py
```

#### 配置autojump

&emsp;&emsp;安装好后，需要配置一下，将下面的内容添加到 ~/.zshrc 文件中。`~` 是用户目录，修改为autojump的安装目录即可。

```bash
[[ -s .autojump/etc/profile.d/autojump.sh ]] && . .autojump/etc/profile.d/autojump.sh
```

### zsh-syntax-highlighting

&emsp;&emsp;zsh-syntax-highlighting 是一个命令语法高亮插件，可以让你的命令更加醒目，

#### 安装zsh-syntax-highlighting

```bash
git clone git://github.com/zsh-users/zsh-syntax-highlighting.git
```

#### 配置zsh-syntax-highlighting

```bash
vim ~/.zshrc

#在plugins=(git)后面添加
plugins=(git zsh-syntax-highlighting)
```
```
source ~/.zshrc
```

### zsh-autosuggestions

&emsp;&emsp;zsh-autosuggestions 是一个命令自动补全插件，可以根据你的历史记录，自动补全你想要的命令，在敲下指令的前面部分之后会以灰色的字体提示剩下的内容，按右方向键应用提示。

#### 安装zsh-autosuggestions

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions
```

#### 配置zsh-autosuggestions

```bash
vim ~/.zshrc

#在plugins=(git)后面添加
plugins=(git zsh-autosuggestions)
```
```
source ~/.zshrc
```
