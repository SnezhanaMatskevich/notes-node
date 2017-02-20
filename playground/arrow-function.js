/*jshint esversion: 6 */
var square = (x) => {
	var result = x * x;
	return result;
};

console.log(square(9));

var user = {
	name: "Sniazhana",
	sayHi: () => {
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt() {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

user.sayHiAlt(1, 2, 3);
