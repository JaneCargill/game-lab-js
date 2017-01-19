var rat = require('../rat');
var food = require('../food');
var assert = require('assert');

var rat = new rat('Ratty');
var food = new food('beans', 3, false)

describe('Rat', function() {

  it('Rat has name', function() {
    assert.equal('Ratty', rat.name);
  });

  it('Rat can poison food', function() {
    assert.equal(true, rat.poison(food))
  });
})