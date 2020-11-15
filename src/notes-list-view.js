class NotesListView {
  #notesListModel;

  constructor(notesListModel) {
    this.#notesListModel = notesListModel;
  }

  getList() {
    return this.#notesListModel;
  }

  renderListHTML() {
    var output = '<ul>';
    this.#notesListModel.getAllNotes().forEach(
      note => output += `<a href='#note${note.showID()}'><li><div>${note.showTwentyChars()}</div></li></a>`
    );
    return output += '</ul>';
  }
}