function elt(it) {
  if (typeof it == 'string') {
    it = document.createElement(it)
  }
  return {
    set: function(key, val) {
      if (val) {
        it.setAttribute(key, val)
      }
    },
    push: function(x) {
      if (x.self && x.self().blur) {
        return it.appendChild(x.self())
      }
      else {
        it.innerHTML += x
      }
    },
    self: function() {
      return it
    },
    get: function() {
      return it.innerHTML
    }
  }
}

elt.get = function(selector) {
  var f = selector[0] == '#'? 'getElementById' :
          selector[0] == '.'? 'getElementsByClassName' :
          'getElementsByTagName'
  return document[f](selector)
}
