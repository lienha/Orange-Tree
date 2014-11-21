FRUIT_BEARING_AGE = 3;
MAX_AGE = 30;
function createTree(){
  return new Tree();
};

function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  this.orangeCount = 0;
  this.grow = function() {
    this.age++;
    this.height = 10;
    if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += Math.floor((Math.random() * 10) + 1);
    };
    if (this.age > MAX_AGE) {
        this.isAlive = false;
    };
  };
};

var orange = function() {
  this.diameter = Math.random(5)
};

Tree.prototype.dropOrange = function() {
    if (this.orangeCount > 0) {
      this.orangeCount--;
      return new orange();
    }
}

var pickOrange = function(tree) {
  tree.dropOrange();
}