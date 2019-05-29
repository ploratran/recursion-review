// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
/*
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
*/
var parseJSON = function(json) {
  var firstChar = json[0];
  //console.log(json.slice(0, 4));

  if (firstChar === '[') {
    var array = [];
    

  } else if (json.slice(0, 4) === 'null'){
    return null;
  } else if(json.slice(0, 4) === 'true'){
    return true;
  }else if(json.slice(0, 5) === 'false'){
    return false;
  }
};
