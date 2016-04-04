'use strict';

var Calculator = require('./Calculator'),
		express = require('express'),
		bodyParser = require('body-parser'),
		port = 2233,
		app, tae, myCalc;

app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/front/js'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
	res.render('index',
	  { title : 'Home' }
	 );
});

app.post('/tae', function(req, res) {
	myCalc = new Calculator();
	tae = myCalc.calculateTae(req.body.tin, req.body.paymentFrequency);

	res.send({tae: tae});
});

app.listen(process.env.PORT || port, function() {
	console.log('server listening on port: ' + port);
});
