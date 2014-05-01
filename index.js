function Class(arguments) {
  if (arguments.initialize)
    this.constructor = arguments.initialize;
  else
    this.constructor = function() {
    
    }

  for (method in arguments) {
    if (typeof(arguments[method]) == 'function' && method != 'initialize')
      this.constructor.prototype[method] = arguments[method];
  }

  return this.constructor;
};

module.exports = Class;