describe('Rock Paper Scissors: all possible hands given a number of rounds.', function() {

  it ('should return an array', function() {
    var sampleDefault = rockPaperScissors();
    var test= Array.isArray(sampleDefault);
    expect(test).to.equal(true);
  });

  it('should default to three rounds', function() {
    var sampleDefault = rockPaperScissors();
    expect(sampleDefault.length).to.equal(27);
  });

  it('should find all possible throws', function() {
    var sampleDefault = rockPaperScissors();
    var test = sampleDefault.indexOf(sampleDefault[10]);
    expect(test).to.be.at.least(0);
  });

  it('should find use the rounds parameter if given', function() {
    var sampleTrivial = rockPaperScissors(1);
    var test = sampleTrivial.length;
    expect(test).to.equal(3);
  });

});
