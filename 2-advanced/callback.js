/*
                    "I will callback later!"
    A callback:
        Is a function passed as an argument to another function.
        This technique allows a function to call another function.
        A callback function can run after another function has finished.
 */

function myDisplayer(some) {
	console.log(some);
}

function myCalculator(num1, num2, myCallback) {
	let sum = num1 + num2;
	myCallback(sum);
}

//myCalculator(5, 5, myDisplayer);
/**
 *  Callback Hell:
 *      Callback Hell is essentially nested callbacks stacked below one another,
 *      forming a pyramid structure.
 *      Every callback depends/waits for the previous callback, thereby making
 *      a pyramid structure  that affects the readability and maintainability of
 *      the code.
 *  */

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
	};
	xmlHttp.open('GET', theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}

httpGetAsync('https://picsum.photos/200/300', (data) => {
	console.log(data);
	document.getElementById('img_1').setAttribute('src', data.responseURL);

	httpGetAsync('https://picsum.photos/200/300', (data) => {
		console.log(data);
		document.getElementById('img_2').setAttribute('src', data.responseURL);

		httpGetAsync('https://picsum.photos/200/300', (data) => {
			console.log(data);
			document
				.getElementById('img_3')
				.setAttribute('src', data.responseURL);
		});
	});
});
