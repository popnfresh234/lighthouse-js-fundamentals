function range(start, end, step) {
  var outputArray = [];
  if( start > end || start === undefined || end === undefined || step === undefined || step < 0){
    return outputArray;
  }
  for(var i = start; i <= end; i += step){
    outputArray.push(i);
  }
  return outputArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));