### Base64
encoding:  
`btoa(data)` 

decoding:  
`atob(data)` 

### Hex-encoding
encoding:  
`data.map(function(n) { return n.toString(16) }).join("")`

decoding:  
`data.match(/../g).map(function(n) { return parseInt(n, 16 })`

### Ascii string vs byte array
to byte array:  
`data.match(/./g).map(function(x){ return x.charCodeAt(0) })`

from byte array:  
`String.fromCharCode.apply(null, data)`



### Testing for insecure direct object references with jQuery

    var exists= []; for(var i = 0; i < 100 ; i++) (function(x) { $.getJSON("/?id=" + x).success(function() { e.push(x) }) })(i);

