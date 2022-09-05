const factorial = (number) => {

  // your code here
  let factorial=number
  
  if (number==0){
    return 1
  }else{     
      for(let i=number;i>1;i--){
        factorial = factorial * (i-1) 
      }
  }
  
  return factorial  
}

module.exports = factorial;
