/*jshint esversion: 6 */
console.log("Starting notes.js");

const fs = require('fs');


var getAll = () => {
	console.log("Getting all notes");
};

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var noteString = fs.readFileSync('note-data.json');
		notes = JSON.parse(noteString);
	} catch (e) {
		console.log('Warn. No data file.');
	}

	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('note-data.json', JSON.stringify(notes));
	}

};

var readNote = (title) => {
	console.log("Reading note: ", title);
};

var removeNote = (title) => {
	console.log("Removing note: ", title);
};


module.exports = {
	getAll: getAll,
	addNote: addNote,
	readNote: readNote,
	removeNote: removeNote
};
