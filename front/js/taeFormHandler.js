var button = document.getElementById('calculateButton');

$('#calculateButton').on('click', function() {
	var params = {
		tin: $('#tin').val(),
		paymentFrequency: $('#paymentFrequency').val()
	};
	$.post('/tae', params, function(data) {
		$('.taeResult').html('<br>The tae calculated is: ' + data.tae);
	});
});