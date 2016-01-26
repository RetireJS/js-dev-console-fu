### Base64
Browser:

    String.prototype.base64Decode = function() { return atob(this) }
    String.prototype.base64Encode = function() { return btoa(this) }

Node.js

    Array.prototype.base64Encode = function() { return new Buffer(this.slice()).toString('base64'); }
    String.prototype.base64Decode = function() { return Array.prototype.slice.apply(new Buffer(this.toString(), 'base64')); }

### Hex encoding 

    String.prototype.hexDecode = function() { return this.match(/../g).map(function(c) { return parseInt(c, 16) }) }
    String.prototype.hexEncode = function() { return this.toByteArray().hexEncode() }
    Number.prototype.toHex = function() { return ("0" + this.toString(16)).substr(-2) }
    Array.prototype.hexEncode = function() { return this.map(function(x) { return x.toHex() }).join("") }

### Ascii string vs byte array

    String.prototype.toByte = function() { return this.charCodeAt(0) }
    Number.prototype.toChar = function() { return String.fromCharCode(this) }
    String.prototype.toByteArray = function() { return this.match(/[\s\S]/g).map(function(c){ return c.toByte() }) }
    Array.prototype.asString = function() { return String.fromCharCode.apply(null, this) }

### Xor and random bytes

    Array.prototype.xor = function(ar) { return this.map(function(e, i) { return e ^ ar[i % ar.length]; }) }
    Array.randomBytes = function(length) { return Array.prototype.slice.call(crypto.getRandomValues(new Uint8Array(length))) }

### Testing for insecure direct object references with jQuery

    var exists= []; for(var i = 0; i < 100 ; i++) (function(x) { $.getJSON("/?id=" + x).success(function() { e.push(x) }) })(i);

## Examples
XOR plain text with random key

    var key = Array.randomBytes(16);
    var cipher = "Hello world".toByteArray().xor(key).hexEncode();


