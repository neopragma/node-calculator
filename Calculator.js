const calc = {
    argumentsAreNumeric: function() {
      var retval = true
      for (var i = 0 ; i < arguments.length ; i++) {
        if (isNaN(arguments[i])) {
          retval = false
          break
        }
      }
      return retval
    },
    numericMessage: 'Arguments must be numbers!',
    add: function(a, b) {
      if (arguments.length !== 2) return 'add() requires exactly 2 arguments'
      if (isNaN(a) || isNaN(b)) return calc.numericMessage
      return a + b
    },
    subtract: function(a, b) {
      if (!calc.argumentsAreNumeric(a,b)) return calc.numericMessage 
      return 0
    }
}

module.exports = calc 
  