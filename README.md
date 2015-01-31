# elt

DOM reduced to essentials.

```
var title = elt('title')
title.add("elt")
elt(document.head).add(title)

var body = elt(document.body)

var h1 = elt('h1')
h1.add("elt")
h1.add({ title: "Title" })
body.add(h1)

var h2 = elt('h2')
h2.add("DOM reduced to essentials.")
h2.add({ title: "Subtitle" })
body.add(h2)

var div = elt('div')
div.add("Somethings")

// var html = elt('code')
// html.push(div.html)
body.add(div)
```
