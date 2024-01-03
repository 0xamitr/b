var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const fs = require("fs");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
async function main(){
  try {
    await mongoose.connect('mongodb+srv://amit:aGFeLAzfIeaOvclR@cluster0.yf8tk3a.mongodb.net/?retryWrites=true&w=majority');
    const db = mongoose.connection;
    const col = db.collection('new');
    // fs.readFile('./jsondata.json', 'utf8', (error, data) => {
    //   if (error) {
    //     console.log(error);
    //     return;
    //   }
    //   try {
    //     const jsonData = JSON.parse(data);
    //     col.insertMany(jsonData)
    //       .then(result => {
    //         console.log('Data inserted:', result);
    //       })
    //       .catch(err => {
    //         console.error('Error inserting data:', err);
    //       });
    //   } catch (parseError) {
    //     console.error('Error parsing JSON:', parseError);
    //   }
    // });
  } catch (connectError) {
    console.error('Error connecting to MongoDB:', connectError);
  }
}

main();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, ()=>{
  console.log("server start");
});

module.exports = app;

