describe('String Rotation: check to see if a string is a rotated version of another string.', function() {

  it ('should return true for a rotated string', function() {
    expect(stringRotation('thomas', 'omasth')).to.equal(true);
    expect(stringRotation('aabbcc', 'bccaab')).to.equal(true);
    expect(stringRotation('aabbccbbaabbcc', 'baabbccaabbccb')).to.equal(true);
  });

  it('should return false if the strings are not rotated', function() {
    expect(stringRotation('thomas', 'tomhas')).to.equal(false);
  });

  it('should return false if the strings are not the same length', function() {
    expect(stringRotation('thomas', 'tmhas')).to.equal(false);
  });

  it('should return true if the strings same', function() {
    expect(stringRotation('thomas', 'thomas')).to.equal(true);
  });
});