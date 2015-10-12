// program3.js

var t2 = require("through2");

function write(buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase());
	next();
}

function end() {
	this.push(null);
}

var stream = t2(write, end);
process.stdin.pipe(stream).pipe(process.stdout);
