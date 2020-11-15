console.log("NOTES MODEL TESTS");
console.log("-------------");
// Line2 initializes ability to test.
var test = new Asparagus();
var message = "The best note! I've never written a better note in my life!"
var note = new Note(message);

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

console.log("-------------");
