var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

var food = new Food('bees', 10, false);
var food2 = new Food('beans', 3, false);
var rat = new Rat('Ratty');

describe('Food', function() {
  beforeEach(function() {
    food.replenishValue = 10;
    food2.replenishValue = 3;
  });

  it('Name of food', function() {
    assert.equal('bees', food.name);
  });

  it('Food replenish value', function() {
    assert.equal(10, food.replenishValue);
  });

  it('Food is poisonous', function() {
    rat.poison(food);
    assert.equal(true, food.poisonous);
  });

  it('Food is poisonous', function() {
    assert.equal(false, food2.poisonous);
  });

});