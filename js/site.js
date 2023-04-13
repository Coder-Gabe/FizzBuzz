// get start and end numbers from the inputs

function getValues() {
	let fizzValue = document.getElementById('fizzValue').value;
	let buzzValue = document.getElementById('buzzValue').value;
	let stopValue = document.getElementById('stopValue').value;

	let fizzNumber = parseInt(fizzValue);
	let buzzNumber = parseInt(buzzValue);
	let stopNumber = parseInt(stopValue);

	if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber) && Number.isInteger(stopNumber)) {
		let numberArray = generateNumbers(fizzNumber, buzzNumber, stopNumber);
		displayNumbers(numberArray);
	} else {
		// display an error
		Swal.fire({
			icon: 'error',
			title: 'Oops!',
			text: 'Please enter valid numbers for the start and end values',
			backdrop: false
		});
	}

}

// generate the range of numbers to display
function generateNumbers(fizzNumber, buzzNumber, stopNumber) {

	let basketOfNumbers = [];

	for (let i = 1; i <= stopNumber; i = i + 1) {

		if (i % fizzNumber == 0 && i % buzzNumber == 0) {
			basketOfNumbers.push('FizzBuzz');
		} else if (i % fizzNumber == 0) {
			basketOfNumbers.push('Fizz');
		} else if (i % buzzNumber == 0) {
			basketOfNumbers.push('Buzz');
		} else {
			basketOfNumbers.push(i);
		}
	}

	return basketOfNumbers;
}

//placing the generate numbers on the page and bolding the even numbers
function displayNumbers(numbers) {

	let results = '';

	for (let index = 0; index < numbers.length; index = index + 1) {

		let currentNumber = numbers[index];

		if (currentNumber) {
			results = results + "<tr><td>" + currentNumber + "</td></tr>";
		} else {
			results = results + "<tr><td>" + currentNumber + "</td></tr>";
		}


	}

	let tableBody = document.getElementById('results');
	tableBody.innerHTML = results;
}
