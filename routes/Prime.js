/**
 * New node file
 */

function checkNumber(number) {
	if(number === null || number === "" || isNaN(number) || number.indexOf(".") !== -1) {
		return false;
	}
	return true;
}

function isValidNumber(number) {
	if(number <= 0 || number > 1000) {
		return false;
	}
	return true;
}

function isPrime(number) {
	if(number === 2) {
		return true;
	}
	for(var i=2;i<=number/2;i++) {
		if(number % i === 0) {
			return false;
		}
	}
	return true;
}


exports.checkPrime=function(req, res) {
	var number = req.body.number;
	if(!checkNumber(number)) {
		//res.send("Enter valid number");
		res.render('index', { title: 'Simple Math Solver' , error: 'Enter valid number' });
	} else if(!isValidNumber(number)) {
		//res.send("The number should be in-between 1 to 1000(inclusive).");
		res.render('index', { title: 'Simple Math Solver' , error: 'The number should be in-between 1 to 1000(inclusive).' });
	} else {
		if(isPrime(number)) {
			// Todo : Need to convert to jade view.
			//res.send("The number:" + number +" is a prime number!!!");
			res.render('index', { title: 'Simple Math Solver' , output: 'The number: ' + number +' is a prime number!!!' });
		} else {
			//res.send("The number:" + number +" is not a prime number!!!");
			res.render('index', { title: 'Simple Math Solver' , output: 'The number: ' + number +' is not a prime number!!!' });
		}
	}
};



function findPrime(number) {
	var start = 1;
	var end = number;
	var primeNos = new Array();
	var count = 0;
	
	for(var i=start; i<=end;i++) {
		if(isPrime(i)) {
			primeNos[count++] = i;
		}
	}
	return primeNos;
}


exports.findPrime=function(req, res) {
	var number = req.body.number;
	var primeNos = new Array(); 
	var primeDisplay = "The prime nos. in-between 1 to " + number + ": ";
	if(!checkNumber(number)) {
		//res.send("Enter valid number");
		res.render('index', { title: 'Simple Math Solver' , error: 'Enter valid number' });
	} else if(!isValidNumber(number)) {
		//res.send("The number should be in-between 1 to 1000(inclusive).");
		res.render('index', { title: 'Simple Math Solver' , error: 'The number should be in-between 1 to 1000(inclusive).' });
	} else {
		primeNos = findPrime(number);
		var i=0;
		for(i=0;i<(primeNos.length - 1);i++) {
			primeDisplay += primeNos[i] + ", ";
		}
		primeDisplay += primeNos[i];
		//res.send(primeDisplay);
		res.render('index', { title: 'Simple Math Solver' , output: primeDisplay });
	}

};


function randomNoGenerator(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomGen() {
	var count1 = 0, count2 = 0;
	for(var i=0;i<50;i++) {
	if(randomNoGenerator(1, 2) === 1) {
		count1++;
	} else {
		count2++;
	}
	}
}


//randomGen();

exports.randomPrime = function(req, res) {
	//var count = req.body.count;
	//var number = req.body.number;
	var number = randomNoGenerator(1, 1000);
	//console.log("The number generated: " + number);
	/*if(!checkNumber(number)) {
		//res.send("Enter valid number");
		res.render('index', { title: 'Simple Math Solver' , error: 'Enter valid number' });
	} else if(!isValidNumber(number)) {
		//res.send("The number should be in-between 1 to 1000(inclusive).");
		res.render('index', { title: 'Simple Math Solver' , error: 'The number should be in-between 1 to 1000(inclusive).' });
	} else {*/
		//var startTime = new Date();
		//for(var i = 0; i<count;i++) {
			if(randomNoGenerator(0,1) === 0) {
				//console.log("Check prime called.");
				var primeFlag = isPrime(number);
				res.render('index', { title: 'Simple Math Solver' , output: "Random number generator is Prime: " + primeFlag});
			} else {
				//console.log("Find prime called.");
				var primeNos = findPrime(number);
				var primeDisplay = "";
				var i=0;
				for(i=0;i<(primeNos.length - 1);i++) {
					primeDisplay += primeNos[i] + ", ";
				}
				primeDisplay += primeNos[i];
				res.render('index', { title: 'Simple Math Solver' , output: "Random number generator find Prime: " + primeDisplay});
			}
		//}
		//var timeTaken = new Date() - startTime + " ms";
		//res.render('index', { title: 'Simple Math Solver' , output: "The time taken in executing random tasks of number " + number + " for " + count + " times is: " + timeTaken});
		//res.render('index', { title: 'Simple Math Solver' , output: "The time taken in executing random tasks of number " + number + " is " + timeTaken});
			
	//}
};

//invokeRandomCalls(5, 250000);


