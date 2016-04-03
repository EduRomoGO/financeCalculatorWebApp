'use strict';

// var IRPF = 20%;
// tae cuenta 123 2.8%

var Calculator = function () {};

Calculator.prototype.calculate = function(savings, taxes, comission, tin) {
	// var taxesNumber = parseInt(taxes.slice(0,2));
	var savingsAfterComission = (savings - comission),
			profit = (tin === 0) ? savingsAfterComission : (savingsAfterComission * tin/100),
			profitAfterTaxes = (taxes === 0) ? profit : profit * (1 - taxes/100);

	return profitAfterTaxes;
};

Calculator.prototype.calculateTae = function(tin, interestsPaymentFrequency) {
	var tae = Math.pow((1 + (tin/100)/interestsPaymentFrequency), interestsPaymentFrequency) - 1,
			oneM = 1000000,
			taeRounded = Math.round(tae*oneM)/oneM;

	return taeRounded;
};

module.exports = Calculator;