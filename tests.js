// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal("MMMCMXCIX");
  });

  it('should convert 3333 to "MMMCCCXXXIII"', function() {
    expect(integerToRoman(3333)).to.equal("MMMCCCXXXIII");
  });

  it('should convert 1444 to "MCDXLIV"', function() {
    expect(integerToRoman(1444)).to.equal("MCDXLIV");
  });

  it('should convert 3999 to "MCDXLIV"', function() {
    expect(integerToRoman(1444)).to.equal("MCDXLIV");
  });

  it('should convert 6 to "VI"', function() {
    expect(integerToRoman(6)).to.equal("VI");
  });

  it('should convert 77 to "LXXVII"', function() {
    expect(integerToRoman(77)).to.equal("LXXVII");
  });

  it('should convert 828 to "DCCCXXVIII"', function() {
    expect(integerToRoman(828)).to.equal("DCCCXXVIII");
  });

  it('should convert "    "2 to "II"', function() {
    expect(integerToRoman("     2")).to.equal("II");
  });

  it('should throw an error for numbers less than 1', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers more than 4000', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers less than 0', function() {
    expect(() => integerToRoman("-1")).to.throw("The number must be between 1 and 3999.");
  });
  // Doesn't Work Beacsuse Error is Outside Function
  /*it('should throw an error for invalid integer number because ?', function() {
    expect(() => integerToRoman('?')).to.throw('Please enter a valid integer number.');
  });
  // Doesn't Work Beacsuse Error is Outside Function
  it('should throw an error for invalid integer number because I ', function() {
    expect(() => integerToRoman('I')).to.throw('Please enter a valid integer number.');
  });*/

  it('should throw an error for invalid less than 1 integer number because Empty ', function() {
    expect(() => integerToRoman('')).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers less than 1 because Space ', function() {
    expect(() => integerToRoman(' ')).to.throw("The number must be between 1 and 3999.");
  });
});

describe('romanToInteger', function() {
  it('should convert "I" to 1', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger("MMMCMXCIX")).to.equal(3999);
  });

  it('should convert "MMCMXCIX" to 2999', function() {
    expect(romanToInteger("MMCMXCIX")).to.equal(2999);
  });

  it('should convert "VI" to 6', function() {
    expect(romanToInteger("VI")).to.equal(6);
  });

  it('should convert "LXXVII" to 77', function() {
    expect(romanToInteger("LXXVII")).to.equal(77);
  });

  it('should convert "DCCCXXVIII" to 828', function() {
    expect(romanToInteger("DCCCXXVIII")).to.equal(828);
  });

  it('should convert "IV" to 4', function() {
    expect(romanToInteger("IV")).to.equal(4);
  });

  /*it('should convert "    II" to 2', function() {
    expect(romanToInteger("   II")).to.equal(2);
  });*/

  it('should convert "i" to 1', function() {
    expect(romanToInteger("i")).to.equal(1);
  });
/*
  it('should convert "í" to 1', function() {
    expect(romanToInteger("í")).to.equal(1);
  });

  it('should convert "Í" to 1', function() {
    expect(romanToInteger("Í")).to.equal(1);
  });
*/
  it('should throw an error for empty input', function() {
    expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for space input', function() {
    expect(() => romanToInteger(' ')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for integer input', function() {
    expect(() => romanToInteger('1')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for integer+char input', function() {
    expect(() => romanToInteger('7V')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for an input over 4 Equal parts', function() {
    expect(() => romanToInteger('IIII')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for an input over 2 Equal 5 parts', function() {
    expect(() => romanToInteger('VV')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for an input  where 10 is over 1000', function() {
    expect(() => romanToInteger('XM')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for Non-Existent input', function() {
    expect(() => romanToInteger('T')).to.throw("The Roman numeral contains invalid characters.");
  });
});

