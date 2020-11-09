class Asparagus {
  
  constructor() {
    this.testCount = 0;
    this.passedTests = 0;
    this.failedTests = 0;
    this.testInfo = []
  }

  it(description, assertion) {
    this.testCount++
    assertedTest = assertion();
    status = this._passFail(assertedTest);
    this.testInfo.push({ testNum: this.testCount, description: description, status: status })
  }

  expect(argument) {
    return new AsparaMatch(argument);
  }

  _passFail(test) {
    if(test === true) {
      this.passedTests++
      return 'passed';
    } else {
      this.failedTests++
      return 'failed';
    }
  }
}




// it(description, () => {
//   expect(sd,ffjis).toBeA(Class);
// })