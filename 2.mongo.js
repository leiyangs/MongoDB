// 用户创建文章
const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://10.10.18.150:27017/db',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: Number
  },
  create_time: {
    type: Date,
    default: Date.now
  }
})

let User = db.model('User', UserSchema);

let ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: String,
  user: {
    type: {type: mongoose.SchemaTypes.ObjectId,ref:'User'}
  }
})

let Article = db.model('Article', ArticleSchema);

(async () => {
  // 关联表
  let user = await User.create({username: 'yang', password: 123456});
  let article = await Article.create({title:'mongon',content:'mongo详解',user:user._id});
  console.log(article);
  
  // 多表联查，可以通过ref 和 populate
  let hasarticle = await Article.findById('5f16955abea11b5268833e96').populate('User',{username:1});
  console.log(hasarticle);
})()
