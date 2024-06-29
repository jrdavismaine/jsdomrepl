const repl = require("node:repl");
const fs = require("fs");
const { program } = require("commander");
const jsdom = require("jsdom");

repl.builtinModules = ["jsdom"];
program.option("-f, --file <path to html file name>");
program.parse();
const opts = program.opts();
const file = opts.file;

const html = file ? fs.readFileSync(file).toString() : null;
const { JSDOM } = jsdom;
const dom = new JSDOM(html);
const replServer = repl.start({ useColors: true, prompt: "jsdom-repl> " });
replServer.context.JSDOM = JSDOM;
if (file) {
  replServer.context.dom = dom;
  replServer.context.window = dom.window;
  replServer.context.document = dom.window.document;
}

replServer.on("exit", () => {
  process.exit();
});
