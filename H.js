// H.js
// XHR + DOM

H = {}

// { method: String, link: String, content: String, success: Function, error: Function }
H._http = function(o) {
  var xhr = new XMLHttpRequest()
  xhr.open(o.method, o.link)
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      o.success(this.responseText)
    }
    // TODO
    // else {
    //   o.error()
    // }
  }
  o.content? xhr.send(o.content) : xhr.send()
}

H.get = function(link, success, error) {
  // XHR
  if (link.slice(0, 4) == 'http') {
    H._http({ method: 'GET', link: link, success: success, error: error)
  }
  // DOM
  else {
    var f = link[0] == '#'? 'getElementById' :
            link[0] == '.'? 'getElementsByClassName' :
            'getElementsByTagName'
    return document[f](link)
  }
}

H.post = function(link, content, success, error) {
  // XHR
  if (link.slice(0, 4) == 'http') {
    H._http({ method: 'POST', link: link, content: content, success: success, error: error)
  }
  // DOM
  else {
    elt(link).add(content)
  }
}

H.put = function(link, content, success, error) {
  // XHR
  if (link.slice(0, 4) == 'http') {
    H._http({ method: 'PUT', link: link, content: content, success: success, error: error)
  }
  // DOM
  else {
    elt(link).replace(content)
  }
}

H.delete = function(link, target, success, error) {
  // XHR
  if (link.slice(0, 4) == 'http') {
    H._http({ method: 'DELETE', link: link, success: success, error: error)
  }
  // DOM
  else {
    elt(link).remove(target)
  }
}
