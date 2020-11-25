/* jshint esnext:true */

/*
  this is a comment
*/

const o = {
  "configurationVersion": 2.1, "_comment": "this value is rarely changed",
  "clientID": "X918273645",
  "customerReferenceID": "000392739",
  "network": {
    "ipAddresses": ["17.128.255.0", "127.0.0.1", "10.10.10.1"],
    "_comment_abc_123": "Only the 17.x.x.x address is publicly addressable",
    "ports": [80, 443, 21, 22, 1337]
  },
  "processingLevel": "FULL",
  "customer": {
    "name": "john doe",
    "postalCode": "A1B2C3",
    "country": "CAN",
    "_comment": "Canada is the best"
  },
  "misc": {
    "_comment": "\
	    Are backslash line-breaks actually valid JSON? \
      bar \
	    baz \
	    foo \
	  "
  }
};

const noComments = commentFreeJson(o);
console.log(`No comments found in output: ${testCommentsFound(noComments)}`);
console.log(noComments);

function commentFreeJson(obj) {
  const commentRe = /(,?\s?"_comment[\w\d_]*"\s?:\s?"[^"]{0,}?"\s?)/gi;
  return JSON.stringify(obj).replace(commentRe, '');
}

function testCommentsFound(s) {
  return /_comment/.test(s) === false;
}

var svg = document.querySelector("svg");

var serializer = new XMLSerializer();
var source = serializer.serializeToString(svg);
if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
}
if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
}
source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

var url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source);

var link = document.createElement('a');
link.href = url;

console.log(url);
document.body.appendChild(link);