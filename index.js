console.log('hi');
var myPromise = new Promise(function (resolve, reject) {
	if (true) {
		resolve('There');
	} else {
		reject("Aww, didn't work");
	}
});

myPromise.then(
	function (result) {
		// Resolve callback
		console.log(result);
	},
	function (result) {
		// Reject callback
		console.error(result);
	}
);
