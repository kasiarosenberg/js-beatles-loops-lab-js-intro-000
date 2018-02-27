function theBeatlesPlay(arr1, arr2) {
  var newArray = [];
  for(var i=0; i<arr1.length; i++) {
    newArray.push(arr1[i] + "plays" + arr2[i]);
  }
  return newArray;
}

function helper(arr) {
  for(var i=0; i<arr.length; i++) {
    arr[i].unshift(arr[i] + "!!!");
    arr[i-1].pop();
  }
  return arr;
}
function johnLennonFacts(arr) {
  var newArray = [];
  var counter = 0;
  while(counter < arr.length) {
    newArray.push(arr[counter] + "!!!");
    counter++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num ++;
  } while (num < 15);
  return arr;
}