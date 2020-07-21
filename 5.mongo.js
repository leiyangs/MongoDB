// hook
// 在特定时机回调
// 存储密码时变成md5加密
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

UserSchema.pre('save', function (next) {
  this.password = crypto.createHmac('sha256', 'zfpx').update(this.password).digest('hex');
  next();
});
// 加盐
UserSchema.statics.login = function (username, password, callback) {
  password = crypto.createHmac('sha256', 'yan').update(password).digest('hex');
  return this.findOne({ username, password }, callback);
};

let User = db.model('User', UserSchema);

User.login('yang', '123456', function (err, doc) {
  console.log(err, doc);
});


