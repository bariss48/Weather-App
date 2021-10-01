//NPM PACKAGES
const express = require('express');
const app = express();
//ROUTES
const main_Route = require('./routes/main');

app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/',main_Route);

app.listen(3000,() => {
    console.log('server on port 3000');
})