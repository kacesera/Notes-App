// expect(<INPUT>).toEqual(<RETURN VALUE>)
// expect(<instance>).toBeA(<class>)
class Asparagus {

  constructor(argument) {
    this.argument = argument;
  }

  toEqual(expected) {
    return this._equalMatcher(expected);
  }

  toBeAnInstanceOf(className) {
    return this._instanceTypeMatcher(className);
  }

  toBeAn(className) {
    return this._instanceTypeMatcher(className);
  }

  toBeA(className) {
    return this._instanceTypeMatcher(className);
  }

  _instanceTypeMatcher(className) {
    return this.argument instanceof className;
  }

  _equalMatcher(expected) {
    return this.argument === expected;
  }
}

function expect(argument) {
  return new Asparagus(argument);
}
