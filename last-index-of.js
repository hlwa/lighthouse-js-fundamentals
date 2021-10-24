function lastIndexOf(array, element){
  let array1 = [];
  for( let i = array.length - 1; i > -1; i--){
    if(array[i] === element){
      array1.push(i);
      break;
    }
  }
  if(array1.length === 0){
    return (-1);
  }else{
    return array1[0];
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);