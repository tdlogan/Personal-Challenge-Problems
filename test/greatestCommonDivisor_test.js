describe('Greatest Common Divisor: return GCD of two numbers.', function() {

  it ('should return GCD of 1 for two primes', function() {
    expect(gcd(17, 5)).to.equal(1);
  });

  it('should return GCD of two numbers', function() {
    expect(gcd(12,3)).to.equal(3);
  });

  it ('should return GCD of 1 for two primes with recursion', function() {
    expect(gcd_recursive(17, 5)).to.equal(1);
  });

  it('should return GCD of two numbers with recursion', function() {
    expect(gcd_recursive(12,3)).to.equal(3);
  });


});
