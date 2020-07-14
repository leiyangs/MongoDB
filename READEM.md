# 什么是MongoDB

- MongoDB是一个基于分布式文件存储的开源数据库系统
- MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

## 安装

1. windows安装
  MongoDB64位绿色版 链接: [https://pan.baidu.com/s/1EkAB2SrcU1mfMfff_WDxtA] 密码: w913
2. mac安装
  先安装homebrew [http://brew.sh/]
  使用brew安装mongodb ``` brew install mongodb ```
  再安装可视化工具 Robomongo

## MongoDB启动与连接

  为了在全局环境下执行，需要配置环境变量，在path中配置mongo的bin路径。
  cmd输入

  ```bash
  mongod --dbpath=D:\Mongodb\data
  ```

## MongoDB配置
  
  在mongo文件夹下新建mongo.conf,logfile是一个不存在的文件，用来写入日志

  ```bash
  dbpath=E:\MongoDB\bin\data
  logpath=E:\MongoDB\bin\log\logfile
  ```

## 添加到window服务的两种方式

- 以管理员身份运行命令
- logfile是一个不存在的文件名，而非目录名

1. 根据config文件配置

```bash
  mongod --config "E:\MongoDB\bin\mongo.conf" --install --serviceName "MongoDB"
```

2. 直接命令配置

```bash
mongod.exe --logpath C:\program1\MongoDB\bin\log\logfile --logappend --dbpath C:\program1\MongoDB\bin\data --serviceName MongoDB --install
```
