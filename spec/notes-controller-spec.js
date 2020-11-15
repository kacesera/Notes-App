console.log("NOTES CONTROLLER TESTS");
console.log("-------------");
var test = new Asparagus();
var shortHTML = "<ul><li><div>Favourite drink: sel</div></li></ul>"
var indexHTML = {
  innerHTML: "<div id='app'>Hello Planet</div>"
}
var noteDouble = {
  showMessage: () => { return "Favourite drink: seltzer" },
  showID: () => { return 0 }
}
var listDouble = {
  createNote: () => { return noteDouble },
  showNote: () => { return noteDouble.showMessage() }
}
class Page {
  getElementById(element) { 
    return indexHTML; 
  }
}
class viewDouble {
  constructor(listDouble){
  }
  getList () {
    return listDouble;
  }
  renderListHTML() {
    return shortHTML;
  }
}
var page = new Page();
var noteController = new NotesController(listDouble, viewDouble);

noteController.insertListHTML(page);
test.it("adds list HTML to the index page", () => (
  test.expect(indexHTML.innerHTML).toEqual(shortHTML)
));

noteController.showNote('0', page);
test.it("shows a full note on the same page", () => (
  test.expect(indexHTML.innerHTML).toEqual("Favourite drink: seltzer")
));

console.log("-------------");
