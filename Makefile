install:
	npm install

start:
	npx node bin/brain-even.js

publish:
	npm publish

publish_dry:
	npm publish --dry-run

lint:
	npx eslint .
