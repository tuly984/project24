require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// const bodyparser = require('body-parser');
// extname:".hbs", defaultLayout:'main'

const employeeController = require('./controllers/employeeController');

var app = express();
// app.use(bodyparser.urlencoded({
//     extended: true
// }));
app.use(express.json());
const hbs = exphbs.create({ extname:".hbs" })


// app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Express server started at port : ', port);
});

app.use('/employee', employeeController);