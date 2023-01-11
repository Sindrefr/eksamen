const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', );
});
app.get('/kart', function(req, res) {
    res.render('kart', );
});
app.get('/about', function(req, res) {
    res.render('about', );
});

app.listen(3000, function() {
    console.log('Server listening on http://localhost:3000');
});
