function elt(self) {
  if (typeof self == 'string') {
    self = document.createElement(self)
  }
  return {
    html: (function() { return self.innerHTML })(),
    attributes: {},
    self: self,
    set: function(key, val) {
      if (typeof key == 'string') {
        val = val || null
        this.attributes[key] = val
        self.setAttribute(key, val)
      }
      else {
        var o = key
        for (var i in o) {
          this.attributes[key] = val
          self.setAttribute(i, o[i])
        }
      }
      return self
    },
    push: function(x) {
      if (x.self && x.self.blur) {
        return self.appendChild(x.self)
      }
      else {
        self.innerHTML += x
      }
      return self
    }
  }
}

elt.get = function(selector) {
  var f = selector[0] == '#'? 'getElementById' :
          selector[0] == '.'? 'getElementsByClassName' :
          'getElementsByTagName'
  return document[f](selector)
}
