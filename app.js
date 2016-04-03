'use strict';

var Calculator = require('./Calculator'),
		classInspector = require('./classInspector'),
		tin = 5,
		interestsPaymentFrequency = 1,
		tae;

var myCalc = new Calculator();

tae = myCalc.calculateTae(tin, interestsPaymentFrequency);
console.log('The TAE calculated is: ' + tae);

//classInspector(myCalc);