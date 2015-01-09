// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var x;

  x = {};

  x.get_handlers = function(entry, resources) {

    /*
    return a hash of only the handlers that should be called for this entry
     */
    var filtered_handlers, handler, handlers, resource, _ref, _ref1;
    filtered_handlers = {};
    for (resource in resources) {
      handlers = resources[resource];
      handler = handlers.team[entry.a];
      if (!handler) {
        if (entry.k === resource) {
          handler = (_ref = handlers.team.self) != null ? _ref[entry.a] : void 0;
        } else {
          handler = (_ref1 = handlers.team.other) != null ? _ref1[entry.a] : void 0;
        }
      }
      if (handler) {
        filtered_handlers[resource] = handler;
      }
    }
    return filtered_handlers;
  };

  module.exports = x;

}).call(this);