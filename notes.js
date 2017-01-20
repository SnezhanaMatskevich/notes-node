/*jshint esversion: 6 */
console.log("Starting notes.js");

var getAll = () => {
  console.log("Getting all notes");
};

var addNote = (title, body) => {
  console.log("Adding note: ", title, body);
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
