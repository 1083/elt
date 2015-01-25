var title = elt('title')
title.push("elt &ndash; test")
elt(document.head).push(title)

var h1 = elt('h1')
h1.push("elt")
h1.set('title', "Title")
elt(document.body).push(h1)

var h2 = elt('h2')
h2.push("DOM reduced to essentials.")
h2.set({ title: "Subtitle" })
elt(document.body).push(h2)
