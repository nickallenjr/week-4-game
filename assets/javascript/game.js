window.onload = function() {
	//Creates random number between 19 - 120 and display it
	var randomNumber = Math.floor(Math.random() * 120 + 19);

	document.getElementById('rannum').innerHTML = randomNumber;

	//Creates array for gathering numbers from clicking and getting the sum of them.
	var emptyArray = [];
	function getSum(total, num) {
		return total + num;
	};
	function myFunction(item) {
		var sumArray = document.getElementById("score");
		sumArray.innerHTML = emptyArray.reduce(getSum);
	};
	
	//Creates random numbers for each picture clicked and pushes them to the empty array.
	var bl = Math.floor(Math.random() * 12 + 1);
	console.log(bl);
	document.getElementById('blonde').onclick = function pressImg() {
		emptyArray.push(bl);
		myFunction();
	};

	var br = Math.floor(Math.random() * 12 + 1);
	console.log(br);
	document.getElementById('brown').onclick = function pressImg() {
		emptyArray.push(br);
		myFunction();
	};

	var wh = Math.floor(Math.random() * 12 + 1);
	console.log(wh);
	document.getElementById('white').onclick = function pressImg() {
		emptyArray.push(wh);
		myFunction();
	};

	var or = Math.floor(Math.random() * 12 + 1);
	console.log(or);
	document.getElementById('orange').onclick = function pressImg() {
		emptyArray.push(or)
		myFunction();
	};

	var pi = Math.floor(Math.random() * 12 + 1);
	console.log(pi);
	document.getElementById('pink').onclick = function pressImg() {
		emptyArray.push(pi);
		myFunction();
	};









































}