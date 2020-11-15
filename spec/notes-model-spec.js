console.log("NOTES MODEL TESTS");
console.log("-------------");
// Line2 initializes ability to test.
var test = new Asparagus();
var message = "The best note! I've never written a better note in my life!"
var note = new Note(message, 0);
var note2 = new Note(message, 1);
var note3 = new Note(message, 2);

// No {} for function otherwise no return ability
// Testing that our tests work.
test.it('is an Asparagus', () =>
  test.expect(test).toBeAn(Asparagus)
);

test.it('is an instance of Note', () =>
  test.expect(note).toBeA(Note)
);

test.it('can return the message stored', () => 
  test.expect(note.showMessage()).toEqual(message)
);

// Testing #showTwentyChars();
test.it("returns only the first 20 characters of a note", () => (
  test.expect(note.showTwentyChars()).toEqual("The best note! I've ")
));

// Testing that each note can have a unique 'id'

test.it("has an id of 0",  () =>(
  test.expect(note.showID()).toEqual(0)
));

test.it("has an id of 1",  () =>(
  test.expect(note2.showID()).toEqual(1)
));
test.it("has an id of 2",  () =>(
  test.expect(note3.showID()).toEqual(2)
));

console.log("-------------");
