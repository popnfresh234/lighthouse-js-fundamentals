function merge(firstArray, secondArray) {
  // concat arrays
  for (var i = 0; i < secondArray.length; i ++){
    firstArray.push(secondArray[i]);
  }
  return sort(firstArray);
}

function sort(inputArray) {
  var done = false;
  while (!done){
    done = true;
    for (var i = 1; i < inputArray.length; i ++){
       if (inputArray[i-1]  > inputArray[i]){
          done = false;
          var temp = inputArray[i-1];
          inputArray[i-1] = inputArray[i];
          inputArray[i] = temp;
       }
    }
  }
  return inputArray;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
