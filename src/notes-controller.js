class NotesController {
  #view;
  #list;

  constructor(noteListModel, listViewClass = NotesListView) {
    noteListModel.createNote('Favourite drink: seltzer');
    this.#view = new listViewClass(noteListModel);
    this.#list = this.#view.getList();
  }

  insertListHTML(page = document) {
    page
      .getElementById('app')
      .innerHTML = this.#view.renderListHTML();
  }

  showNote(noteID, page = document) {
    page
      .getElementById('app')
      .innerHTML = this.#list.showNote(noteID);
  }

};

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  controller.showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return window.location.hash.split("note")[1];
};

controller = new NotesController(new NotesList);
controller.insertListHTML();
makeUrlChangeShowNoteForCurrentPage();

