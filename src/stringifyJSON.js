// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/***************************************************************************************************
* JSON.stringify() converts a value to JSON notation representing it:
* 
* - If the value has a toJSON() method, it's responsible to define what data will be serialized.
* 
* - Boolean, Number, and String objects are converted to the corresponding primitive values during 
*   stringification, in accord with the traditional conversion semantics.
* 
* - If undefined, a Function, or a Symbol is encountered during conversion it is either
*   - omitted (when it is found in an object) or 
*   - censored to null (when it is found in an array). 
*   JSON.stringify() can also just return undefined when passing in "pure" values like 
*   JSON.stringify(function(){}) or JSON.stringify(undefined).
* 
* - All Symbol-keyed properties will be completely ignored, even when using the replacer function.
* 
* - The instances of Date implement the toJSON() function by returning a string (the same as 
*   date.toISOString()). Thus, they are treated as strings.
* 
* - The numbers Infinity and NaN, as well as the value null, are all considered null.
* 
* - All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their 
*   enumerable properties serialized.
***************************************************************************************************/

var stringifyJSON = function(obj) {
  // your code goes here
  var json = '';

  if ( typeof obj === 'boolean' || typeof obj === 'number') { 
    json += obj; 
  } else if ( typeof obj === 'string') { 
    json += '"' + obj + '"'; 
  } else if ( typeof obj === 'undefined') { 
    json += 'undefined'; 
  } else if (Array.isArray(obj)) {
    json += '[';
    //recursion
    for(var i = 0; i < obj.length; i++){
      json += stringifyJSON(obj[i]);
      if(i !== obj.length - 1){
        json += ',';
      }
    }
    json += ']';  
  } else if (typeof obj === 'object') {
    if (obj === null) {
      json += "null";
    } else {
      json += '{';
      for (let key in obj){
        if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined' && typeof obj[key] !== 'symbol') {
          json += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if (json.length > 1) {
        json = json.slice(0, -1);
      }
      json += '}';
    }
  }
  


  return json;
};
