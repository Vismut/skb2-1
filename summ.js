var express = require('express');
var app = express();

function summNNumeric(a, b){
	if (isNaN(a) || typeof a === "undefined"){
		a = 0;
	} 
	
	if (isNaN(b) || typeof b === "undefined"){
		b = 0;
	}
	
	summResult = a + b;

	return summResult;
}

app.get('/summ', function (req, res){
	const outputSumm = summNNumeric(parseInt(req.query['a'], 10), parseInt(req.query['b'], 10));
	res.send(outputSumm+'');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});