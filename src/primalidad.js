const trialDivision = (number) => {
  // your code here
  if (number % 2==0){
    return "El " + number +" no es un numero primo"
  }else return "El " + number +" es un numero primo"

}

module.exports = trialDivision;