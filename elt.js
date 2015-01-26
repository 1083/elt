function elt(self) {
  if (typeof self == 'string') {
    self = document.createElement(self) // TODO new instead
  }
  return {
    attributes: {
      '#': '',
      '.': []
    },
    has: function(x) {
      if (x[0] == '.') {
        return self.classList.has(x.substr(1))
      }
      else {
        return !!self.attributes[x]
      }
    },
    add: function(x) {
      if (x.self && x.self.blur) {
        return self.appendChild(x.self)
      }
      else if (x.constructor == Object) {
        for (var i in x) {
          if (i == '.') {
            this.attributes[i].push(x[i])
            self.classList.add(x[i])
          }
          else {
            this.attributes[i] = x[i]
            self.setAttribute(i, x[i])
          }
        }
      }
      else {
        self.innerHTML += x
      }
      return this
    },
    remove: function(x) {
      if (x[0] == '.') {
        self.classList.remove(x.substr(1))
        var index = this.attributes['.'].indexOf(x.substr(1))
        if (index > -1) {
          this.attributes['.'].splice(index, 1)
        }
      }
      else {
        self.removeAttribute(x)
      }
    }
  }
}

elt.get = function(selector) {
  var f = selector[0] == '#'? 'getElementById' :
          selector[0] == '.'? 'getElementsByClassName' :
          'getElementsByTagName'
  return document[f](selector)
}
