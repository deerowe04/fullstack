import  fizzbuzz  from './fizzbuzz';

describe("fizzbuzz", () => {

  it('returns a string', () => {
    console.log('before');
    expect(typeof fizzbuzz(5)).toBe('string')
    console.log('after');
  });

});
