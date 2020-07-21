// 扩展方法 findByname
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
});

// 定义静态方法
UserSchema.statics.findByName = function(username) {
  return this.findOne({username});
};
// 在实例上定义
UserSchema.statics.findByName = function() {
  return this.modle('User').findOne({username:this.username});
};

let User = db.model('User', UserSchema);

(async ()=> {
  let user = await User.findByName('yang');
  // let user = await new User({username:'yang'}).findByName();
  console.log(user);
})();