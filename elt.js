function elt(self) {
  if (typeof self == 'string') { // TODO new instead
    self = document.createElement(self)
  }
  return {
    self: self,
    attributes: {
      '#': '', // ID
      '.': []  // Class
    },
    has: function(x) {
      // Has class x
      if (x[0] == '.') {
        return self.classList.has(x.substr(1))
      }
      // Has attribute x
      else {
        return !!self.attributes[x]
      }
      // TODO
      // Has parent
      // Has child
      // Has sibling
    },
    add: function(x) {
      // Add DOM element x
      if (x.self && x.self.blur) {
        return self.appendChild(x.self)
      }
      // Add object x
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
      // Add HTML x
      else {
        self.innerHTML += x
      }
      return this
    },
    remove: function(x) {
      // Remove class x
      if (x[0] == '.') {
        self.classList.remove(x.substr(1))
        var index = this.attributes['.'].indexOf(x.substr(1))
        if (index > -1) {
          this.attributes['.'].splice(index, 1)
        }
      }
      // Remove attribute x
      else {
        self.removeAttribute(x)
      }
    }
  }
}
