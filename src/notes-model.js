class Note {
  #message;
  #noteID;

  constructor(message, id) {
    this.#message = message
    this.#noteID = id
  }

  showID() {
    return this.#noteID
  }
  showMessage() {
    return this.#message;
  }
  showTwentyChars() {
    return this._shortenMessage();
  }

  _shortenMessage() {
    return this.#message.substr(0, 20);
  }
}
