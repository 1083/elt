function elt(tagName) {
	var it = document.createElement(tagName)
	return {
		set: function(key, val) {
			if (val) {
				it.setAttribute(key, val)
			}
		},
		push: function(x) {
			if (x.self().blur) {
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
