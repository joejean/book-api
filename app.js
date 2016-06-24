var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/Books',  bookRouter);

app.get('/', function(req, res){
	res.send('Welcome to my API');
})

app.listen(port, function(){
	console.log("Listening on PORT "+port);
})