for( let i = 100; i < 201; i++){
  if( i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  }else if( i % 4 === 0 ){
    console.log("Lighthouse");
  }else if( i % 3 === 0 ){
    console.log("Loopy");
  }else{
    console.log(i);
  }
}

/*
Matches the expected pattern for each log
AssertionError: For number 108 output should be LoopyLighthouse but I found Loopy: expected 'Loopy' to equal 'LoopyLighthouse'
    at eval (eval at <anonymous> (https://web.compass.lighthouselabs.ca/assets/application-5a91c61206a8ecbf92fae5ffa1497d961ffe55f760c5696b7d8bdc7068e0057d.js:2165:7194), <anonymous>:19:16)
    at Array.forEach (<anonymous>)
*/