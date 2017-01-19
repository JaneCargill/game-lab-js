var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('assert');

var hero = new Hero('Buzz Man', 70, 'bees');
var food1 = new Food('bees', 5, false);
var food2 = new Food('beans', 3, false);
var food3 = new Food('bread', 4, false);
var rat = new Rat('Ratty');

describe('hero', function() {
  beforeEach(function() {
   hero.health = 70; 
  });

  it('hero has name', function() {
    assert.equal('Buzz Man', hero.name);
  });

  it('hero has health', function() {
    assert.equal(70, hero.health);
  });

  it('hero has favourite food', function() {
    assert.equal('bees', hero.favouriteFood);
  });

  it('hero can talk', function() {
    assert.equal('My name is Buzz Man', hero.talk());
  });

  it('hero can eat favourite food', function() {
    assert.equal(77.5, hero.eat(food1));
  });

  it('hero can eat', function() {
    assert.equal(73, hero.eat(food2));
  });

  it('hero eats poison', function() {
    rat.poison(food3);
    assert.equal(66, hero.eat(food3));
  });

  it('can fly', function() {
    hero.eat(food1);
    hero.eat(food1);
    assert.equal('I can fly', hero.superPower());
  });

});