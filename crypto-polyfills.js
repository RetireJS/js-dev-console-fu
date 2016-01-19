//These functions all characters are ascii / Latin-1

Number.prototype.toHex = function() { return ("0" + this.toString(16)).substr(-2) }

String.prototype.base64Decode = function() { return atob(this) }
String.prototype.base64Encode = function() { return btoa(this) }

String.prototype.toByteArray = function() { return this.match(/./g).map(function(c){ return c.charCodeAt(0) }) }

Array.prototype.hexEncode = function() { return this.map(function(x) { return x.toHex() }).join("") }

String.prototype.toByteArray = function() { return this.match(/./g).map(function(c) { return c.charCodeAt(0) }) }

String.prototype.hexDecode = function() { return this.match(/../g).map(function(c) { return parseInt(c, 16) }) }
String.prototype.hexEncode = function() { return this.toByteArray().hexEncode() }

Array.prototype.asString = function() { return String.fromCharCode.apply(null, this) }
