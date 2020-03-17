rm -R dist/*
cp index.html dist/index.html
npx tsc
npx browserify dist/index.js -p esmify > dist/bundle.js
