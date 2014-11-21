/* Write your code for the plain-old-js-objects-spec here */
function Tree() {
  this.age = 0;
  this.height = 0;
  this.orangeCount = 0;
  this.isAlive = true;
  this.grow = function() {
    this.age++;
    this.height = 10;
    if (this.age >= FRUIT_BEARING_AGE) {
        this.orangeCount += Math.random(50);
    };
    if (this.age > MAX_AGE) {
        this.isAlive = false;
    };
  };
}

function createTree(){
  return new Tree();
};

FRUIT_BEARING_AGE = 4;
MAX_AGE = 100;

function Orange() {
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