console.log("NOTES LIST VIEW TESTS");
console.log("-------------");
var test = new Asparagus();
var note1 = {
  showTwentyChars: () => { return 'First note.'; }
}
var note2 = {
  showTwentyChars: () => { return 'Second note.'; }
}
var notesListModel = {
  getAllNotes: () => { return [note1, note2]; }
};
var noNotesListModel = {
  getAllNotes: () => { return []; }
}
var listHTML = "<ul><li><div>First note.</div></li><li><div>Second note.</div></li></ul>"
var emptyListHTML = "<ul></ul>"
var notesListView = new NotesListView(notesListModel);
var noNotesListView = new NotesListView(noNotesListModel);

// --------

test.it("notesListView stores a NotesListModel upon instantiation", () => (
  test.expect(notesListView.getList()).toEqual(notesListModel)
));

test.it("notesListView.renderListHTML() creates an html list with both notes", () => (
  test.expect(notesListView.renderListHTML()).toEqual(listHTML)
));

test.it("creates an empty list if there are no notes", () => (
  test.expect(noNotesListView.renderListHTML()).toEqual(emptyListHTML)
));

console.log("-------------");
