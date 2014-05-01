function Class(arguments) {
  if (arguments.initialize)
    this.constructor = arguments.initialize;
  else
    this.constructor = function() {
    
    }

  return this.constructor;
};

module.exports = Class;