/*jshint esversion: 6 */
const fs = require('fs');


var getAll = () => {
	return fetchNotes();
};


var fetchNotes = () => {
	try {
		var noteString = fs.readFileSync('note-data.json');
		return JSON.parse(noteString);
	} catch (e) {
		console.log('Warn. No data file.');
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('note-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var readNote = (title) => {
	console.log("Reading note: ", title);
	var notes = fetchNotes();
	var readNotes = notes.filter((note) => {
		return note.title === title;
	});
	return readNotes[0];

};

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => {
		return note.title !== title;
	});
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
	console.log(note.title);
	console.log(note.body);
};

module.exports = {
	getAll: getAll,
	addNote: addNote,
	readNote: readNote,
	removeNote: removeNote,
	logNote: logNote
};
