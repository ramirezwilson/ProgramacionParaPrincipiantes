for (let i = 1; i <=5 ; i++) {
  let index = "";
  
  for (let j = 1; j <= 5; j++) {
    index +=  ` ${ j * i}`;
    
  }
  console.log(index);
}