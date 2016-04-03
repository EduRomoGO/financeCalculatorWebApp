var button = document.getElementById('calculateButton');

$('#calculateButton').on('click', function() {
	var params = { tin: 3 };
	$.post('/tae', params, function(data) {
		console.log(data);
	});
});