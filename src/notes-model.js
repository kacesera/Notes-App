var uniqueID = -1
class Note {
  #message;
  #noteID;

  constructor(message, id) {
    this.#message = message
    this.#noteID = this._getUniqueNum();
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

  _getUniqueNum() {
    uniqueID += 1
    return uniqueID - 1
  }

}
