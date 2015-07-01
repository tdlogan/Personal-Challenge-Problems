describe('String Permutations: determine if the input is a permutation of the base string.', function() {

  /*  Overwrite methods from superclass  */
  var name = "tommy"

  it ('should return false when strings are different lengths', function() {
    expect(name.permutationCheck('_tommy')).to.equal(false);
  });

  it('should return false for strings that aren\'t permutations of each other', function() {
    expect(name.permutationCheck('gerald')).to.equal(false);
  });

  it('should return true for strings that are permutations of each other', function() {
    expect(name.permutationCheck('ymmot')).to.equal(true);
  });


});
