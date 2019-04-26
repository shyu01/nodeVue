
process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const history = require('connect-history-api-fallback');
// const history = require('connect-history-api-fallback');

const cors = require('cors') // 상단 아무곳이나 추가
// var indexRouter = require('./routes/index');
 var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(path.join(__dirname, '../', 'fe', 'dist'));

// cors app.use('/api') 와 같이 이동 경로 정하기 위해서
app.use(cors()) // api 위에서 사용하겠다고 선언

 app.use('/api', require('./routes/api'))

// app.use(history())

 app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));

// app.use('/', indexRouter);
 app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message });
});

module.exports = app;

const mongoose = require('mongoose')
const User = require('./models/users')

// const userSchema = new mongoose.Schema({
//    name: { type: String, default: '', unique: true, index: true },
//    age: { type: Number, default: 1 }
//  });
//
// const User = mongoose.model('User', userSchema);

// mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
  // 아래처럼 에러 메시지 처리 중요
   if (err) return console.error(err)
   console.log('mongoose connected!!!!!')
   // User.deleteMany()
   // .then( r => console.log(r))
   //   .catch(e => console.error(e))

   // User.create({ name: '하하' })
   //  .then(r => console.log(r))
   //  .catch(e => console.error(e))

    // User.find()
    //  .then(r => console.log(r))
    //  .catch(e => console.error(e))

   // User.updateOne({ _id: '5c5ad3fdc1bbd6384ce84615'}, {$set: {age: 35} })
   //  .then(r => {
   //    console.log(r)
   //     console.log('updated')
   //     return User.find()
   //  })
   //  .then(r => console.log(r))
   //  .catch(e => console.error(e))

   // User.deleteOne({ name: '하하'  })
   //  .then(r => {
   //    console.log(r)
   //    return User.find()
   //  })
   //  .catch(e => console.error(e))
});

 console.log(process.env.NODE_ENV);
