'use strict';

var Calculator = require('./Calculator'),
		express = require('express'),
		tin = 5,
		interestsPaymentFrequency = 1,
		port = 2233,
		app, tae, myCalc;

app = express();

app.get('/', function () {
	myCalc = new Calculator();
	tae = myCalc.calculateTae(tin, interestsPaymentFrequency);
	console.log('The TAE calculated is: ' + tae);
});

app.listen(port);
console.log('server listening on port: ' + port);