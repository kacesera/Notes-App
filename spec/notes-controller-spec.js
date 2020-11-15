console.log("NOTES CONTROLLER TESTS");
console.log("-------------");
var test = new Asparagus();
var html = "<ul><li><div>Favourite drink: seltzer</div></li></ul>"
var indexHTML = {
  innerHTML: "<div id='app'>Hello Planet</div>"
}
var listDouble = {
  createNote: () => {}
}
class Page {
  getElementById(element) { 
    return indexHTML; 
  }
}
class viewDouble {
  constructor(listDouble){
  }
  renderListHTML() {
    return html;
  }
}
var page = new Page();
var noteController = new NotesController(listDouble, viewDouble);

noteController.insertListHTML(page);

test.it("adds list HTML to the index page", () => (
  test.expect(indexHTML.innerHTML).toEqual(html)
));

console.log("-------------");
