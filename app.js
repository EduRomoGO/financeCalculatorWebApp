'use strict';

var Calculator = require('./Calculator'),
		express = require('express'),
		tin = 5,
		interestsPaymentFrequency = 1,
		port = 2233,
		app, tae, myCalc;

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(express.static(__dirname + 'bower_components'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
	myCalc = new Calculator();
	tae = myCalc.calculateTae(tin, interestsPaymentFrequency);
	console.log('The TAE calculated is: ' + tae);
	res.render('index',
	  { title : 'Home' }
	 );
});

app.listen(port);
console.log('server listening on port: ' + port);