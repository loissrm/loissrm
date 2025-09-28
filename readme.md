


Los archivos: 

- robots.md: 

Es un archivo de texto sencillo que se coloca en la raíz de tu web.
Sirve para dar instrucciones a los buscadores (Google, Bing, etc.) sobre qué pueden y qué no pueden rastrear en tu sitio.

En tu caso el archivo que te pasé dice:

User-agent: *
Allow: /


User-agent: * → significa “esto aplica para todos los buscadores”.

Allow: / → significa “pueden rastrear todo mi sitio”.

Y además tiene:

Sitemap: https://loissrm.github.io/sitemap.xml


→ Esto le dice a Google dónde está tu sitemap, para que lo use como mapa de tu web.


- sitemap.xml

Es un archivo en formato XML que funciona como un mapa del sitio.
Sirve para indicarle a Google qué páginas existen en tu portfolio y cuándo se actualizaron por última vez.