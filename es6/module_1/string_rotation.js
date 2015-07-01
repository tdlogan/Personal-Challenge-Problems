//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  //need to find where in the second string the original string starts
  //iterate over second string
    //if letter is equal to first letter of first string
      //compare it to first letter of first string
      //if letter equals first character of first string
       //move to next letter
  for (let i = 0; i < str2.length; i++) {

    if (str2[i] === str1[0]) {

    }
  }
}

