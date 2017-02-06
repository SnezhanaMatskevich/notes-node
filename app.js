/*jshint esversion: 6 */
console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");



const argv = yargs.argv;
console.log("Yargs ", argv);

var command = argv._[0];

if (command === "list") {
	notes.getAll();
} else if (command === "add") {
	notes.addNote(argv.title, argv.body);
} else if (command === "remove") {
	notes.removeNote(argv.title);
} else if (command === "read") {
	notes.readNote(argv.title);
} else {
	console.log("Unrecognized command.");
}
