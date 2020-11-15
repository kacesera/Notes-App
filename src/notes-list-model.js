class NotesList {
  #notes;
  #uniqueID;

  constructor() {
    this.#uniqueID = -1
    this.#notes = []
  }

  createNote(message) {
    this.#notes.push(new Note(message));
  }

  showNote(number) {
    return this.#notes[number].showMessage();
  }

  getAllNotes() {
    return this.#notes;
  }
}