// virutal虚拟属性
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
// 查询username的简写
UserSchema.virtual('name').get(function () {
  return this.username.slice(0,2);
});

let User = db.model('User', UserSchema);

(async () => {
 let res = User.findOne({username:'yang'});
 console.log(res.name,res)
})();