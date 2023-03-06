var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// tarea B
var productosRouter = require('./routes/productos');
var preciosRouter = require('./routes/precios');
var promocionesRouter = require('./routes/promociones');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Tarea B
app.use('/productos',productosRouter)
app.use('/precios',preciosRouter)
app.use('/promociones',promocionesRouter)



// Tarea A 1
app.get('/ruta', function(reg,res){
  res.end('Ruta numero ( 1 ) abcdefghijk')
})
// Tarea 2
app.get('/ruta1',function(reg,res){
  res.end('Ruta numero (2) 1234567890')
})
// Tarea 3
app.get('/ruta2', function(reg,res){
  res.end('Ruta numero ( 3 ) !#$%/&?¡@{<]')
})

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

module.exports = app;
