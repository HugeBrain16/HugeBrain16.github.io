import markdown

# convert markdown to html smh

md = markdown.markdown(open('index.md').read())
with open('index.html','w') as f:
	f.write(md)