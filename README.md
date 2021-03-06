# 什么是MongoDB

- MongoDB是一个基于分布式文件存储的开源数据库系统
- MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

## 安装

1. windows安装
  MongoDB64位绿色版 [链接](https://pan.baidu.com/s/1EkAB2SrcU1mfMfff_WDxtA) 密码: w913
2. mac安装
  先安装[homebrew](http://brew.sh/)
  使用brew安装mongodb ` brew install mongodb `
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

1.根据config文件配置

```bash
  mongod --config "E:\MongoDB\bin\mongo.conf" --install --serviceName "MongoDB"
```

2.直接命令配置

```bash
mongod.exe --logpath C:\program1\MongoDB\bin\log\logfile --logappend --dbpath C:\program1\MongoDB\bin\data --serviceName MongoDB --install
```

## 数据库操作

```sql
-- 使用数据库
use xx
-- 查看数据库
show dbs
-- 查看当前使用的数据库
db
-- 删除数据库
db.dropDatabase()
```

## 集合操作

```sql
-- 查看所有集合
show collections
-- 创建集合
db.createCollection(student)
-- 创建并插入文档
db.course.insert({_id:1,name:"语文"})
```

## 插入文档

```sql
-- insert
-- 每当插入一条新文档的时候mongodb会自动为此文档生成一个_id属性,_id一定是唯一的，用来唯一标识一个文档 _id也可以直接指定，但如果数据库中此集合下已经有此_id的话插入会失败
db.student insert({name:"yl",age:18})
-- 循环
for(var i=0;i<5;i++){db.student.insert(name:"yl",age:21)}
```

## 更新文档

```sql
db.collection.update(
   <query>,
   <updateObj>,
   {
     upsert: <boolean>,
     multi: <boolean>
   }
)
db.student.update({name:"yl"},{$set:{name:"YL"}},{upsert: false})
```

- `query` 查询条件,指定要更新符合哪些条件的文档
- `update` 更新后的对象或指定一些更新的操作符
- `$set` 直接指定更新后的值
- `$inc` 在原基础上累加 例`{$inc:{age:1}}`age每次加1
- `$unset` 删除指定的键
- `$push` 向数组中添加元素
- `$ne` `$ne`类似于MYSQL的 `not in` 或者`not exists`
- `$addToSet` 向集合中添加元素
- `$pull` 向集合中删除元素
- `$each` 把数组中的元素逐个添加到集合中
- `$pop` 从数组中移除指定的索引中对应的元素
- `upsert` 可选，这个参数的意思是，如果不存在符合条件的记录时是否插入`upsert:true`. 默认是false,不插入。
- `multi` 可选，mongodb 默认只更新找到的第一条记录，如果这个参数为true,就更新所有符合条件的记录。

## 文档的删除

```sql
db.collection.remove(
   <query>,
   {
     justOne: <boolean>
   }
)
```

## 查询文档

```sql
db.collection_name.find()
```

## 在node中使用

   mongoose
