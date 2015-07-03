//In mathematics, the greatest common divisor (gcd) of two or more integers,
//when at least one of them is not zero, is the largest positive integer that
//divides the numbers without a remainder.
//For example, the GCD of 8 and 12 is 4. Any two prime numbers will have a GCD of 1.

let gcd = (number1, number2) => {
  //Determine the smaller of the two values
  let mininum = Math.min(number1, number2);

  //Check every value starting with the smaller number if it divides evenly
  //into each number
  for (let i = mininum; i>0; i--) {
    if ((number1 % i ===0) &&(number2%i===0)){
      return i;
    }
  }

}

//EXTRA CREDIT: Solve with recursion

let gcd_recursive = (number1, number2) => {
  if(!number2){
    return number1;
  }
  return gcd_recursive(number2, number1 % number2);
}


