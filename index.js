var CTOR_NAME = 'initialize';


var Class = function(properties, parent) {

  var ctor = function() {
    if (properties.hasOwnProperty(CTOR_NAME))
      properties[CTOR_NAME].apply(this, arguments);
  };

  for (var method in properties) {
    if (!properties.hasOwnProperty(method))
      continue;
    if (method === CTOR_NAME)
      continue;

    ctor.prototype[method] = properties[method];
  }

  var extend = function(child, parent) {
    parent = parent || Object;

    child.__super__ = parent;
    child.prototype.__proto__ = parent.prototype;

    var currentClass = child;
    child.prototype.super = function(method) {
      var args = [].slice.call(arguments, 1);
      currentClass = currentClass.__super__;
      result = currentClass.prototype[method].apply(this, args);
      currentClass = child;
      return result;
    }

  };

  extend(ctor, parent);

  return ctor;
};

module.exports = Class;