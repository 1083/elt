var title = elt('title')
title.push("elt &ndash; test")
elt(document.head).push(title)

var body = elt(document.body)

var h1 = elt('h1')
h1.push("elt")
h1.set('title', "Title")
body.push(h1)

var h2 = elt('h2')
h2.push("DOM reduced to essentials.")
h2.set({ title: "Subtitle" })
body.push(h2)

var div = elt('div')
div.push("Somethings")

// var html = elt('code')
// html.push(div.html)
body.push(div)
