function elt(it) {
  if (typeof it == 'string') {
    it = document.createElement(it)
  }
  return {
    attributes: {},
    set: function(key, val) {
      if (typeof key == 'string') {
        if (val) {
          this.attributes[key] = val
          it.setAttribute(key, val)
        }
      }
      else {
        var o = key
        for (var i in o) {
          this.attributes[key] = val
          it.setAttribute(i, o[i])
        }
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
    get: function() {
      return it.innerHTML
    },
    self: function() {
      return it
    }
  }
}

elt.get = function(selector) {
  var f = selector[0] == '#'? 'getElementById' :
          selector[0] == '.'? 'getElementsByClassName' :
          'getElementsByTagName'
  return document[f](selector)
}
