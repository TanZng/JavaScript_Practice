function sumPrimes(num) {
  let sum = 0;
  for (let i=2; i<=num; i++){
    if(primo(i)===true){
      sum = sum + i;
      console.log(i);
    }

  }
  return sum;
}

function primo(num){
  let x = 0;
  for (let i=1; i<=num; i++){
    if (num%i==0){
      x++
    }
  }
  if (x > 2){
    return false
  }
  else{
    return true
  }
}

sumPrimes(10);
