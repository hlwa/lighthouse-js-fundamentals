const finalPosition = function (moves) {
  let x = 0, y = 0, z = [];
  for( const move of moves){
    if(move === 'west'){
      x--;
    }else if(move === 'east'){
      x++;
    }else if(move === 'north'){
      y++;
    }else if(move === 'south'){
      y--;
    }
  }
  z.push(x);
  z.push(y);
  return (z);
}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));