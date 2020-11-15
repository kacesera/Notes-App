var uniqueID = -1
class NotesList {
  #notes;
  #uniqueID;

  constructor() {
    this.#uniqueID = -1
    this.#notes = []
  }

  createNote(message) {
    this.#notes.push(new Note(message, this._getUniqueNum()));
  }

  showNote(number) {
    return this.#notes[number].showMessage();
  }

  getAllNotes() {
    return this.#notes;
  }

  _getUniqueNum() {
    uniqueID += 1
    return uniqueID
  }
}