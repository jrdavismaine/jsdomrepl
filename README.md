# jsdomrepl

A repl used to interact with JSDOM.

# Install

```
git clone https://github.com/jrdavismaine/jsdomrepl.git
cd jsdomrepl
npm i
```

# REPL

When starting the REPL, the JSDOM constructor is always added, window and document handles when `-f` is used.

# Load repl, manually add html to JSDOM constructor.

Use `npm run start` to load REPL.

```
$ npm run start

> jsdomrepl@1.0.0 start
> node --no-warnings repl.js

jsdom-repl> var dom = new JSDOM('<html><body><h1>TEST</h1></body></html>');
undefined
jsdom-repl> dom.window.document.querySelector('h1').innerHTML;
'TEST'
jsdom-repl> document
Uncaught ReferenceError: document is not defined
jsdom-repl> window
Uncaught ReferenceError: window is not defined
```

# Load repl with html file

Use `npm run start -- -f examples/test.html` to load REPL.

```
$ npm run start -- -f examples/test.html

> jsdomrepl@1.0.0 start
> node --no-warnings repl.js -f examples/test.html

jsdom-repl> window.document.querySelector('h1').innerHTML;
'Hello'
jsdom-repl> document.querySelector('h1').innerHTML;
'Hello'
```
