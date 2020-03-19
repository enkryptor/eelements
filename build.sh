rm -R dist/*
mkdir dist -p
cp index.html dist/index.html
npx tsc
npx browserify dist/index.js -p esmify > dist/bundle.js
