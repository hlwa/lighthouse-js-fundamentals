function range(start, end, step){
  let array1 = [];
  if(start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return array1
  }else{
    while(start <= end){
      array1.push(start);
      start += step;
    }
    return array1;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));