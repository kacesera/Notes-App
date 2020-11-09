// Line2 initializes ability to test.
var test = new Asparagus();
var note = new Notes();

// No {} for function otherwise no return ability
// Testing that our tests work.
test.it('is an Asparagus', () =>
  test.expect(test).toBeAn(Asparagus)
);

test.it('is an instance of Note', () =>
  test.expect(note).toBeA(Notes)
);
