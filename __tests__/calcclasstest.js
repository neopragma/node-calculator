var Calculator = require('../CalculatorClass.js')

var calc = new Calculator()

describe('Addition', () => {
  describe('valid input', () => {
    it('returns 41 when adding 13 and 28', () => {
      expect(calc.add(13, 28)).toBe(41)
    })
    it('returns 19 when adding 13 and 6', () => {
      expect(calc.add(13, 6)).toBe(19)
    })
    it('supports the additive identity property when arg0 is zero', () => {
      expect(calc.add(0, 79)).toBe(79)
    })
    it('supports the additive identity property when arg1 is zero', () => {
      expect(calc.add(334, 0)).toBe(334)
    })
    it('supports the commutative property of addition', () => {
      expect(calc.add(29.65, 3.12)).toBe(calc.add(3.12, 29.65))
    })
    it('supports the associative property of addition', () => {
      expect(calc.add(calc.add(3, 5),6))
        .toBe(calc.add(3,calc.add(5, 6)))
    })
    it('supports the distributive property of addition', () => {
      expect(5 * calc.add(16, 4))
        .toBe(calc.add((5 * 16), (5 * 4)))
    })
  })
  describe('invalid input', () => {
    it('complains when the first argument is not a number', () => {
      expect(calc.add('alpha',5)).toBe('Arguments must be numbers!')
    })
    it('complains when the second argument is not a number', () => {
      expect(calc.add(256,'beta')).toBe('Arguments must be numbers!')
    })
    it('complains when too few arguments are passed', () => {
      expect(calc.add(4)).toBe('add() requires exactly 2 arguments')
   })
   it('complains when too many arguments are passed', () => {
    expect(calc.add(4, 5, 7)).toBe('add() requires exactly 2 arguments')
 })
})
})
describe('Subtraction', () => {
  describe('invalid input', () => {
    it('complains when the first argument is not a number', () => {
      expect(calc.subtract('alpha',5)).toBe('Arguments must be numbers!')
    })   
  })
})