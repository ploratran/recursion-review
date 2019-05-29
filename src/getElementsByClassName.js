// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.
https://stackoverflow.com/questions/7754269/create-a-htmlcollection
*/

var getElementsByClassName = function(className) {
  var returnArray = [];

  //console.log('print this: ' + JSON.stringify(document.body));
  // var element = document.body;
  // function findClassName(){
  //   if (element.classList && element.classList.contains(className)) {
  //     returnArray.push(element);
  //   }
  // }
  // if (element.classList && element.classList.contains(className)) {
  //   returnArray.push(element);
  // }
  // function findClassName(className){

  // }

  var getElementsHelper = function (element) {
    //console.log(String.prototype.includes.apply(currentElement.className, className));
    if (element.classList && element.classList.contains(className)) {
      returnArray.push(element);
    }

    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        
        getElementsHelper(element.childNodes[i]);
      }
    }
  };

  getElementsHelper(document.body);

  return returnArray;
};
