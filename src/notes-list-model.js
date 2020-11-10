class NotesList {
  #notes;

  constructor() {
    this.#notes = []
  }

  createNote(message) {
    this.#notes.push(new Note(message));
  }

  showNote(number) {
    return this.#notes[number].showMessage();
  }
}