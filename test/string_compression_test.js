describe('String Compression: return a compressed version of a string.', function() {

  it ('should compress string', function() {
    expect("aabbbcccc".stringCompression()).to.equal("a2b3c4");
  });

  it('should return original string if compressed version is longer', function() {
    expect("a".stringCompression()).to.equal("a");
  });

  it('should compress an unsorted string', function() {
    expect("abaccccbb".stringCompression().to.equal("a2b3c4");
  });

});
