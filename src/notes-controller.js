class NotesController {
  #view

  constructor(noteListModel, listViewClass = NotesListView) {
    noteListModel.createNote('Favourite drink: seltzer');
    this.#view = new listViewClass(noteListModel);
  }

  insertListHTML(page = document) {
    page.getElementById('app').innerHTML = this.#view.renderListHTML();
  }
};

controller = new NotesController(new NotesList);
controller.insertListHTML();

