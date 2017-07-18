var totalScore = 0;
var randomNumber = Math.floor(Math.random() * 120 + 19);
bl = Math.floor(Math.random() * 12 + 1);
br = Math.floor(Math.random() * 12 + 1);
wh = Math.floor(Math.random() * 12 + 1);
or = Math.floor(Math.random() * 12 + 1);
pi = Math.floor(Math.random() * 12 + 1);

function reset() {
	randomNumber = Math.floor(Math.random() * 120 + 19);
	document.getElementById('rannum').innerHTML = randomNumber
	bl = Math.floor(Math.random() * 12 + 1);
	br = Math.floor(Math.random() * 12 + 1);
	wh = Math.floor(Math.random() * 12 + 1);
	or = Math.floor(Math.random() * 12 + 1);
	pi = Math.floor(Math.random() * 12 + 1);
	emptyArray = [];
	totalScore = 0;
	sumArray = document.getElementById("score");
	sumArray.innerHTML = emptyArray;
}

window.onload = function() {

	var winScore = 0;
	var lossScore = 0;

	//sets div to beginning number tallying win score
	var wins = document.getElementById("wins");
	wins.innerHTML = winScore;

	//sets div to beginning number tallying lose score
	var loses = document.getElementById("losses");
	loses.innerHTML = lossScore;

	//Creates random number between 19 - 120 and display it
	
	document.getElementById('rannum').innerHTML = randomNumber;

	//Creates array for gathering numbers from clicking images and getting the sum of them.
	// var emptyArray = [];
	// function getSum(total, num) {
	// 	return total + num;
	// };
	function myFunction(item) {
		var sumArray = document.getElementById("score");
	 	sumArray.innerHTML = totalScore;
	};


	//Creates random numbers for each picture clicked and pushes them to the empty array.
	console.log(bl);
	document.getElementById('blonde').onclick = function pressImg() {
		// emptyArray.push(bl);
		totalScore += bl;
		console.log(randomNumber);
		console.log(bl);
		console.log(totalScore);
		myFunction();
		if (totalScore === randomNumber) {
			alert("You Win!");
			winScore++;
			wins.innerHTML = winScore;
			reset();
		};
		if (totalScore > randomNumber) {
			alert("You Lose!");
			lossScore++;
			loses.innerHTML = lossScore;
			reset();
		}
	};

	console.log(br);
	document.getElementById('brown').onclick = function pressImg() {
		// emptyArray.push(br);
		totalScore += br;
		console.log(randomNumber);
		console.log(br);
		console.log(totalScore);
		myFunction();
		if (totalScore === randomNumber) {
			alert("You Win!");
			winScore++;
			wins.innerHTML = winScore;
			reset();
		};
		if (totalScore > randomNumber) {
			alert("You Lose!")
			lossScore++;
			loses.innerHTML = lossScore;
			reset();

		}
	};

	console.log(wh);
	document.getElementById('white').onclick = function pressImg() {
		// emptyArray.push(wh);
		totalScore += wh;
		console.log(randomNumber);
		console.log(wh);
		console.log(totalScore);
		myFunction();
		if (totalScore === randomNumber) {
			alert("You Win!");
			winScore++;
			wins.innerHTML = winScore;
			reset();
		};
		if (totalScore > randomNumber) {
			alert("You Lose!")
			lossScore++;
			loses.innerHTML = lossScore;
			reset();

		}
	};

	console.log(or);
	document.getElementById('orange').onclick = function pressImg() {
		// emptyArray.push(or)
		totalScore += or;
		console.log(randomNumber);
		console.log(or);
		console.log(totalScore);
		myFunction();
		if (totalScore === randomNumber) {
			alert("You Win!");
			winScore++;
			wins.innerHTML = winScore;
			reset();
		};
		if (totalScore > randomNumber) {
			alert("You Lose!")
			lossScore++;
			loses.innerHTML = lossScore;
			reset();

		}
	};

	console.log(pi);
	document.getElementById('pink').onclick = function pressImg() {
		// emptyArray.push(pi);
		totalScore += pi;
		console.log(randomNumber);
		console.log(pi);
		console.log(totalScore);
		myFunction();
		if (totalScore === randomNumber) {
			alert("You Win!");
			winScore++;
			wins.innerHTML = winScore;
			reset();
		};
		if (totalScore > randomNumber) {
			alert("You Lose!")
			lossScore++;
			loses.innerHTML = lossScore;
			reset();
		}
	};
}