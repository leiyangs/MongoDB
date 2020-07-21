const mongoose = require('mongoose');

// mongodb://user:pass@ip:port/database
// user 用户名
// pass 密码
// ip IP地址
// port 端口号
// database 数据库名
// 已经存在的数据库会连接，没有的会创建并连接
let db = mongoose.createConnection('mongodb://10.10.18.150:27017/db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.on('error',function(err){
  console.log('数据库连接失败'+err)
})
db.on('open',function(err) {
  console.log('数据库连接成功')
})

// Schema是数据库集合的模型骨架
// 定义集合中的字段名称及类型
let UserSchema = new mongoose.Schema({
  username: { type: String, require:true },
  password: { type: Number },
  create_date:{ type:Date, default:Date.now }
}); // 骨架

// 可以获取也可以设置集合
let User = db.model('User', UserSchema); // 集合

/**在集合中插入数据 */
// Promise的方式
// (async ()=> {
//   let result = await User.create({
//     username:'yang',
//     age:10
//   }); // 没有定义的属性不会存储,没有给定义的属性就不会添加
//   console.log(result)
// })();
// 回调的方式
// User.create({
//   username: 'yang',
//   password: 123456,
// },function(err,res){
//   console.log(err,res)
// })

/**查询修改数据 */
(async ()=>{
  try {
    let user = await User.findById('5f167ea85c3c6054fc3a9867');
    user.password = 666666;
    user.save(()=>{
      console.log('保存成功')
    })
  } catch (error) {
    console.log(error)
  }
})();

/**范围查询 $gt(>)、$lt(<)、$lte(<=)、$gte(>=)*/
(async () => {
  // 查询password范围是10-9的或者是大于5的 或者是7-8
  let res = await User.find({$or:[{password:{$lt:10,$gt:9}},{password:{$gt:5}}],password:{$in:[7,8]}});
  console.log(res)
})

/**删除 */
// User.remove(查询条件, callback); mongon的方法
User.deleteMany({}); // mongoose的方法
