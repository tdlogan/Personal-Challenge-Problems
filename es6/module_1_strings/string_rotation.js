//In this problem we want to check to see if two strings are rotations of each other
//You may only use one call to the given method .substring()

//Example: stringRotation("thomas", "omasth"); -> true
//Example: stringRotation("thomas", "smotha");-> false

let stringRotation = (str1, str2) => {
  // Split strings into arrays
  let array1 = str1.split('');
  let array2 = str2.split('');

  // Find the index of the first letter of the rotated string in the original string
  let index1 = array1.indexOf(array2[0]);

  // Iterate through the rotated string, starting at the beginning
  for(let item of array2){
    // Step through each string simultaneously checking each character
    if (item !== array1[index1++]) {
      // If two characters are not equal, return false
      return false;
    }
    // If the index for string1 reaches the end of the str1
    if(index1 === array1.length){
      // Reset the index to the beginning of the string
      index1 = 0;
    }
  }
  // Return true if loop finishes
  return true;
};

