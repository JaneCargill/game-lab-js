var Villain = require('../villain');
var assert = require('assert');

var villain = new Villain('Tegan', 80, 'stairs');

describe('Villain', function() { 
  beforeEach(function() {
    villain.evilness = 80;
  });

  it('has name', function() {
    assert.equal('Tegan', villain.name);
  });

})