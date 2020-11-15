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
      note => output += `<li><div>${note.showTwentyChars()}</div></li>`
    );
    return output += '</ul>';
  }
}