/**
 *          "I Promise a Result"
 *  "Producing code" is code that can take some time
 *  "Consuming code" is code that must wait for the result
 *  A Promise is a Javascript object that links producing code and consuming code
 */
let myPromise = new Promise(function (myResolve, myReject) {
	myResolve(); // When successful
	myReject(); // When error
});

myPromise.then(
	function (value) {
		/* Code if successful */
	},
	function (error) {
		/* Code if some error */
	}
);
