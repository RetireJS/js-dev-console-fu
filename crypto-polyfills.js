//These functions all assume characters are ascii / Latin-1 (single byte characters 0-255)
Number.prototype.toHex = function() { return ("0" + this.toString(16)).substr(-2) }
Number.prototype.toChar = function() { return String.fromCharCode(this) }

String.prototype.base64Decode = function() { return atob(this) }
String.prototype.base64Encode = function() { return btoa(this) }

String.prototype.hexDecode = function() { return this.match(/../g).map(function(c) { return parseInt(c, 16) }) }
String.prototype.hexEncode = function() { return this.toByteArray().hexEncode() }

String.prototype.toByte = function() { return this.charCodeAt(0) }
String.prototype.toByteArray = function() { return this.match(/[\s\S]/g).map(function(c){ return c.toByte() }) }

Array.prototype.asString = function() { return String.fromCharCode.apply(null, this) }
Array.prototype.hexEncode = function() { return this.map(function(x) { return x.toHex() }).join("") }
Array.prototype.xor = function(ar) { return this.map(function(e, i) { return e ^ ar[i % ar.length]; }) }

Array.randomBytes = function(length) { return Array.prototype.slice.call(crypto.getRandomValues(new Uint8Array(length))) }
