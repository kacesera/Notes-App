var test = new Asparagus();
var notesList = new NotesList();

notesList.createNote("The best note!");
test.it("can create and store a note", () => (
  test.expect(notesList.showNote(0)).toEqual("The best note!")
));

// Testing noteList.getAllNotes()
notesList.createNote("Second note");
test.it("getAll returns an array", () => (
  test.expect(notesList.getAllNotes()).toBeAn(Array)
));

test.it("getAll returns an array of length 2", () => (
  test.expect(notesList.getAllNotes().length).toEqual(2)
));

test.it("getAll returns an array which contains our second note", () => (
  test.expect(notesList.getAllNotes()[1].showMessage()).toEqual("Second note")
));