class Calculator {
    numericMessage = 'Arguments must be numbers!'
    argumentsAreNumeric() {
      var retval = true
      for (var i = 0 ; i < arguments.length ; i++) {
        if (isNaN(arguments[i])) {
          retval = false
          break
        }
      }
      return retval
    }
    
    add(a, b) {
      if (arguments.length !== 2) return 'add() requires exactly 2 arguments'
      if (isNaN(a) || isNaN(b)) return this.numericMessage
      return a + b
    }

    subtract(a, b) {
      if (!this.argumentsAreNumeric(a,b)) return this.numericMessage 
      return 0
    }
}

module.exports = Calculator
  