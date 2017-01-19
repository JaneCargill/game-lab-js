var Rat = function(name) {
  this.name = name;
};

Rat.prototype = {
  poison: function(food) {
    return food.poisonous = true;
  }
};




module.exports = Rat;