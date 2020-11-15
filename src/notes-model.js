class Note {
  #message;
  #shortMessage;

  constructor(message) {
    this.#message = message
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
