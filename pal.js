
// Write a function that takes a string as an argument and 
// returns true if the string is a palindrome 
// (reads the same backwards and forwards) and false if it is not.

// function palindrome(same) {
//    let arry= same.split('').reverse().join("")
//    if (arry===same) {
//      return true
//    }
//    else{
//      return false
//    }
//  }
//   let same = "civic"
//   console.log(palindrome(same))

  
  //take2
  function palinds(str) {
   return str=== str.split('').reverse().join("")
  }
  console.log(palinds("civic"));
  console.log(palinds("student"));
