/*jshint esversion: 6 */
console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes.js");


const titleOptions = {
	describe: "Title of ther note",
	demand: true,
	alias: "t"
};


const argv = yargs
	.command("add", "Add a new note", {
		title: titleOptions,
		body: {
			describe: "Body of the title",
			demand: true,
			alias: "b"
		}
	})
	.help()
	.argv;

var command = argv._[0];

if (command === "list") {
	var allNotes = notes.getAll();
	console.log(allNotes.length);
	allNotes.forEach((note) => {
		notes.logNote(note);
	});
} else if (command === "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Added note.." + note.title + " " + note.body);
	} else {
		console.log("Unable to add note..");
	}
} else if (command === "remove") {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note was not removed";
	console.log(message);
} else if (command === "read") {
	var note = notes.readNote(argv.title);
	if (note) {
		console.log("Read note.." + note.body);
	} else {
		console.log("Unable to read note..");
	}
} else {
	console.log("Unrecognized command.");
}
