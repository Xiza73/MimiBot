const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

//connect to db

// import routes
const indexRoutes = require('./src/routes/index')

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))

//routes
app.use('/', indexRoutes);

//start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})