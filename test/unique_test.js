describe('Unique: determine if all characters in a string are unique.', function() {

  /*  Overwrite methods from superclass  */

  it('should return false for non-unique result', function() {
    expect(unique('tommy')).to.equal(false);
  });

  it('should return true for unique result', function() {
    expect(unique('zoe')).to.equal(true);
  });


});
