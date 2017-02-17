// Create a function that takes a list of numbers and returns a new list where all the duplicate values are removed
//
// var filterDuplicates = function (listOfNumbers) {
//   var filteredArray = [];
//   for (var i = 0; i < listOfNumbers.length; i++ ) {
//       }
//     }
//

//   return filteredArray;

function filterDuplicates(listOfNumbers) {
  var first = {};
  var filteredArray = [];
  var j = 0;
  for(var i = 0; i < listOfNumbers.length; i++) {
    var item = listOfNumbers[i];
    if(first[item] !== true) {
      first[item] = true;
        filteredArray[j++] = item;
    }
  }
  return filteredArray;
}
