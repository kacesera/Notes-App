// Has a method that will return all the note models stored in the array.


// Has a method that creates and stores a new single note model. This function takes as an argument a string that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

// Uses a Javascript class to define a note list model object that can be instantiated.
// Stores an array of note models.
var test = new Asparagus();
var notesList = new NotesList();

notesList.createNote("The best note!");
test.it("can create and store a note", () => (
  test.expect(notesList.showNote(0)).toEqual("The best note!")
));