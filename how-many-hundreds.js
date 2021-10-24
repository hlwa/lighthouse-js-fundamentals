function howManyHundreds(num){
  return  Math.floor(num / 100);
}

howManyHundreds(1000);
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));