---
layout: blog
title: "Ignorer les tags Jekyll"
date: 2019-03-03 11:00:00 +0200
image: assets/images/blog/jekyll.png
categories:
  - Jekyll
tags:
  - Jekyll
published: true
---

Lorsque l'on utilise Jekyll pour faire un site internet, il se peut, sur une page, que vous ayez besoin de montrer comment vous utilisez les tags. L'opération est très simple et est toujours bonne à avoir dans un coin de la tête même si on n'en a pas l'utilité dans l'immédiat.

Pour ce faire, il vous suffit d'entourer le code avec les tags `{{ "{% raw " }}%}` et `{{ "{% endraw " }}%}` comme présent dans l'exemple suivant.

```html
{{ "{% raw " }}%}{% raw %}
{% for blog in site.posts limit:5 %}
  <div class="blog-post">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
  </div>
{% endfor %}
{%endraw%}{{ "{% endraw " }}%}
```

Cela aura pour but d'afficher :
```html
{% raw %}{% for blog in site.posts limit:5 %}
  <div class="blog-post">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.content }}</p>
  </div>
{% endfor %}{%endraw%}
```
