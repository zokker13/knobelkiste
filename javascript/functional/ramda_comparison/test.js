const should = require('should');

const summarizeTheString = require('./index');

describe('when we run the oldschool source', () => {
  it('should return the sum of all strings nicely', () => {
    summarizeTheString.oldSchool('-4,1,2,3,1000').should.be.equal(2);
  });
});

describe('when we run the newschool source', () => {
  it('should return the sum of all strings nicely', () => {
    summarizeTheString.newSchoolVanilla('-4,1,2,3,1000').should.be.equal(2);
  });
});

describe('when we run the underscore source', () => {
  it('should return the sum of all strings nicely', () => {
    summarizeTheString.newSchoolUnderscore('-4,1,2,3,1000').should.be.equal(2);
  });
});

describe('when we run the ramdaStyle source', () => {
  it('should return the sum of all strings nicely', () => {
    summarizeTheString.ramdaStyle('-4,1,2,3,1000').should.be.equal(2);
  });
});

describe('when we run the ramdaConvenience source', () => {
  it('should return the sum of all strings nicely', () => {
    summarizeTheString.ramdaConvenience('-4,1,2,3,1000').should.be.equal(2);
  });
});
