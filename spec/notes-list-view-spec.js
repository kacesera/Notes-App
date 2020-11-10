var test = new Asparagus();

var note1 = {
  showMessage: function () {
    return 'First note.';
  }
}

var note2 = {
  showMessage: function () {
    return 'Second note.';
  }
}

var notesListModel = {
  getAllNotes: function () {
    return [note1, note2];
  }
};

var listHTML = "<ul><li><div>First note.</div></li><li><div>Second note.</div></li></ul>"

var notesListView = new NotesListView(notesListModel);

test.it("notesListView stores a NotesListModel upon instantiation", () => (
  test.expect(notesListView.getList()).toEqual(notesListModel)
));

test.it("notesListView.renderListHTML() creates an html list with both notes", () => (
  test.expect(notesListView.renderListHTML()).toEqual(listHTML)
))