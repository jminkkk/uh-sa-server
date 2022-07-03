var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var sequelize = require('./models').sequelize;

sequelize.sync();

var app = express();
var router = express.Router();

// port
app.set('httpPort', 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const appRouter = require('./routes/apps');
app.use('/app', appsRouter);

var closeRouter = require('./routes/closes');
app.use('/close', closesRouter);

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
  res.render('error');
});

// server start
app.listen(app.get('httpPort'), () => {
  console.log(app.get('httpPort'), '번 포트에서 대기중');
});



module.exports = app;
