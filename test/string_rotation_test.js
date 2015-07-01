describe('String Rotation: check to see if a string is a rotated version of another string.', function() {

  it ('should compress string', function() {
    expect(stringRotation('thomas', 'omasth')).to.equal(true);
  });

  it('should return original string if compressed version is longer', function() {
    expect(stringRotation('thomas', 'tomhas')).to.equal(false);
  });

});