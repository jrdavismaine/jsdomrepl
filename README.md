# jsdomrepl

A repl used to interact with JSDOM.

# Install

```
git clone https://github.com/jrdavismaine/jsdomrepl.git && cd jsdomrepl && npm i
```

# REPL

When starting the REPL, the JSDOM class is always added. The dom, window and document handles are added as well when `-f` is used.

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
jsdom-repl> dom.serialize()
'<html><head></head><body><h1>TEST</h1></body></html>'
jsdom-repl> var newdom = await JSDOM.fromFile('examples/test.html');
undefined
jsdom-repl> newdom.window.document.querySelector('h1').textContent;
'Hello'
jsdom-repl> JSDOM.fragment('<h1>Test</h1>').firstElementChild.textContent;
'Test'
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

jsdom-repl> dom.window.document.querySelector('h1').textContent;
'Hello'
jsdom-repl> window.document.querySelector('h1').innerHTML;
'Hello'
jsdom-repl> document.querySelector('h1').innerHTML;
'Hello'
jsdom-repl> document.querySelector('h2').innerHTML;
'World'
jsdom-repl> document.querySelector('h1').innerHTML = 'HELLO';
'HELLO'
jsdom-repl> document.querySelector('h2').innerHTML = 'WORLD';
'WORLD'
jsdom-repl> dom.serialize();
'<!DOCTYPE html><html lang="en"><head>\n' +
  '    <meta charset="UTF-8">\n' +
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
  '    <title>Test</title>\n' +
  '  </head>\n' +
  '  <body>\n' +
  '    <h1>HELLO</h1>\n' +
  '    <h2>WORLD</h2>\n' +
  '    <div id="message">This is a message.</div>\n' +
  '  \n' +
  '\n' +
  '</body></html>'
```

# Miscellaneous

Running node without the `--no-warnings` option will cause the `The punycode module is deprecated.` message to display. Once this is fixed the `npm run start` script will be updated. See [JSDOM issue 3613](https://github.com/jsdom/jsdom/issues/3613) for more information.

```
$ node repl.js
jsdom-repl> (node:28764) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

# Interesting jsdom issues

<a href="https://github.com/jsdom/jsdom/issues/3732" target="_blank">Attempting to set ARIA properties on ElementInternals results in an error. #3732</a><br>
