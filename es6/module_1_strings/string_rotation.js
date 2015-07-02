//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {
  let length = str1.length;
  //Ensure strings are the same length
  if (length !== str2.length) {
    return false;
  }
  //Checks to see if strings are the same
  if (str1 === str2) {
    return true;
  }

  //Variables set to be the two slices of the string
  let frontFragment;
  let backFragment;

  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[0]) {
      if (str2.includes(str1.slice(i, length))) {
        frontFragment = str1.slice(i, length);
        backFragment = str1.slice(0, i);
        break;
      }
    }
  }
  //Final check to ensure the concatenated string is equal to the rotated string
  return frontFragment + backFragment === str2 ? true : false;
}

