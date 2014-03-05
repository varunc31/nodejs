function getRandomNo() {
	var min = 0;
	var max = 1000;
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log("Random Number:"+random);
	return random;
}

function isPrime(res, number) {
	var isPrimeNum = null;
	if (number < 2) {
		isPrimeNum = false;
	} else {
		for (var index = 2; index < number; index++) {
			if (number % index === 0) {
				isPrimeNum = false;
				return isPrimeNum;
			}
		}
		isPrimeNum = true;
		return isPrimeNum;
	}
}

exports.processPrime = function (req, res) {
	var number = getRandomNo();
	res.statusCode = 200;
	if (isPrime(res, number)) {
		console.log("Result: " + number + " is a prime number.");
		res.send("<p>Result: " + number + " is a prime number.</p>");
	} else {
		console.log("Result: " + number + " is not a prime number.");
		res.send("<p>Result: " + number + " is not a prime number.</p>");
	}
	res.end();
};

exports.listPrimeNos = function (req, res) {
	var number = getRandomNo(),
	resultList = '';
	for (var index = 1; index < number; index++) {
		if (isPrime(res, index)) {
			resultList += index + ' ';
		}
	}
	console.log(resultList);
	res.statusCode = 200;
	res.send("<p>List of prime numbers from 1 to " + number + " is " + resultList + "</p>");
	res.end();
};
