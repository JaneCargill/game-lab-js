var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  talk: function() {
    return ("My name is " + this.name);
  },
  eat: function(food) {
    switch(food.poisonous){
      case true:
         return (this.health -= food.replenishValue);
        break;
      case false:
        if(food.name === this.favouriteFood) {
          return (this.health += (food.replenishValue *1.5))
        }else{
        return (this.health += food.replenishValue);
        }
    }
  },
  superPower: function() {
    if (this.health > 80) {
      return "I can fly";
    }
  }
};

module.exports = Hero;