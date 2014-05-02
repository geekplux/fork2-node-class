function Class(child, parent) {
  for (var method in child) {
    if (child[method].hasOwnProperty && typeof(child[method]) == 'function' && method != 'initialize')
      this.constructor.prototype[method] = child[method];
  }

  if (typeof(parent == 'function'))
    this.constructor.prototype = parent;

  return this.constructor;
};

module.exports = Class;