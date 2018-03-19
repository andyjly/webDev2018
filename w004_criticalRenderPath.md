# Critical Render Path
- a path that website takes to display something to the user
- CSS is a render blocking file
	- can't render a page until you received your CSS
	- example, if you have a font file (from google), you would have to wait for text to render on webpage
- if you want faster consider making own font file
- not making CSS file too large
	- solution is to minifying your css
	- here's a site to minify: https://www.cleancss.com/css-minify/
	- increases speed of website by making a script smaller and also help obfusicate the code