// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
/*
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null

object
    {}
    { members }
members
    pair
    pair , members
pair
    string : value
array
    []
    [ elements ]
elements
    value 
    value , elements
value
    string
    number
    object
    array
    true
    false
    null

*/


var parseJSON = function(json) {
  var firstChar = json[0];
  //console.log(json.slice(0, 4));
  var returnArray = [];

  


  if (firstChar === '{') {
    var obj = {};
    
    var objHelper = function (string) {
      substring = string.substring(1, string.lastIndexOf('}'));
      var members = substring.split(',');

      for (let index = 0; index < members.length; index++) {
        var keyValue = members[i].split(':');
        obj[keyValue[0].slice(0,-1)] = parseJSON(keyValue[1]);
      }
    };
    objHelper(json);
    return obj;

  } else if (firstChar === '[') {
    var array = [];
    debugger;
    
    var arrayHelper = function (string) {
      substring = string.substring(1, string.lastIndexOf(']'));
      var members = substring.split(',');

      for (let index = 0; index < members.length; index++) {
        array.push(parseJSON(members[index]));
      }
    };
    arrayHelper(json);
    return array;
    
  } else if (json.slice(0, 4) === 'null'){
    return null;
  } else if (json.slice(0, 4) === 'true'){
    debugger;
    console.log(json.slice(0, 4));
    return true;
  } else if (json.slice(0, 5) === 'false'){
    console.log(json.slice(0, 5));
    return false;
  }
  // else if( number)
  //   return number
  // else if (firstChar is ")
  //   return string without quotes
  // else if (array)
  //   add parseJSON of each element to array
};
