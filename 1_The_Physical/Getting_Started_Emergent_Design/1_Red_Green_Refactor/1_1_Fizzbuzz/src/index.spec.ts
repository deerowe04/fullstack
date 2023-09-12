import  fizzbuzz  from './fizzbuzz';

describe("fizzbuzz", () => {

  it('returns a string', () => {
    console.log('before');
    expect(typeof fizzbuzz(5)).toBe('string')
    console.log('after');
  });

  it('returns Fizz for 3', () => {
    expect(fizzbuzz(3)).toEqual("Fizz")
  });

  it('returns Buzz for 5', () => {
    expect(fizzbuzz(5)).toEqual("Buzz")
  });

  it('returns FizzBuzz for 15', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz")
  });

});
