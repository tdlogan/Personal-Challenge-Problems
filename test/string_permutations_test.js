describe('String Permutations: determine if the input is a permutation of the base string.', function() {

  /*  Overwrite methods from superclass  */

  it('should return false for strings that aren\'t permutations of each other', function() {
    expect(('tommy').permutationCheck('gerald')).to.equal(false);
  });

  it('should return true for strings that are permutations of each other', function() {
    expect(('zoe').permutationCheck('eoz')).to.equal(true);
  });


});
