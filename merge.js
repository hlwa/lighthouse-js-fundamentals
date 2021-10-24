function merge(array1, array2){
  function compareNumbers(a, b){
    return a - b;
  }

  if(array2.length != 0){
    for(let element of array2){
      array1.push(element);
    }
    return array1.sort(compareNumbers);
  }else{
    return array1.sort(compareNumbers);
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);