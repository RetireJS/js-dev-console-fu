### Base64
encoding:  
`btoa(data)` 

decoding:  
`atob(data)` 

### Hex-encoding
encoding an array:  
`data.map(function(n) { return n.toString(16) }).join("")`

decoding an array:  
`data.match(/../g).map(function(n) { return parseInt(n, 16 })`

encoding an ascii string:
`data.match(/./g).map(function(n) { return n.charCodeAt(0).toString(16);}).join("")`

decoding an ascii string:
`data.match(/../g).map(function(n) { return String.fromCharCode(parseInt(n, 16)) }).join("")`


### Ascii string vs byte array
Ascii string to byte array:  
`data.match(/./g).map(function(x){ return x.charCodeAt(0) })`

Byte array to ascii string:  
`String.fromCharCode.apply(null, data)`



### Testing for insecure direct object references with jQuery

    var exists= []; for(var i = 0; i < 100 ; i++) (function(x) { $.getJSON("/?id=" + x).success(function() { e.push(x) }) })(i);

