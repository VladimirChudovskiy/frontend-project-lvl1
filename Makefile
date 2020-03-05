install:
	npm install

start:
	 node bin/brain-even.js

publish:
	npm publish

publish_dry:
	npm publish --dry-run

lint:
	npx eslint .
