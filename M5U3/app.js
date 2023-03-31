var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// yo lo puse aqui
var app = express();
var pool = require('./modelo/bs')

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

// consulta 
// SELECT
// pool.query('select * from empleados').then(function(resultados){
//   console.log(resultados);
// });

// INSERT
var obj={
  nombre:'Leo',
  apellido:'Messi',
  trabajo:'futbolista',
  edad:35,
  salario:5000000,
  mail:'leoMessi@gamil.com'
}
pool.query('insert into empleados set ?',[obj]).then(function(resultados){
  console.log(resultados);
})

// UPDATE
// var id = 22;
// var obj = {
//   nombre: 'Mark',
//   apellido: 'Zuckerberg'
// }
// pool.query('update empleados set ? where id=?', [obj, id]).then(function(resultados) {
//   console.log(resultados);
// });

// DELETE
// var id = 3;
// pool.query("delete from empleados where id_emp = ?", [id]).then(function(resultados) {
//   console.log(resultados);
// });


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
