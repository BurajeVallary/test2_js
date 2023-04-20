
//Write a function that takes a string as input and 
//returns the most common character in the string.

function word(String,letter){
let count = 0;
for (let b = 0; b < String.length; b++) {
    if (String.charAt(b) ==letter){
        count +=1;

    }
        
    }
    return count;
    
}
let letter="o"
const string=("Goodbye");
// const lettercheck=('o: ')
const result=word(string,letter);
console.log(result);


// Write a function that takes an array of integers and 
// returns a new array that contains the same integers, sorted in descending order.


function descendingSort(arr) {
    return arr.sort(function(a, b)
     {
      return b - a;
    }
    )
    
  }
let arr = [31, 21, 49, 102, 195];
let sortedArr = descendingSort(arr);
console.log(sortedArr); 


// Write a function that takes an array of strings and
//  returns a new array that contains the same strings, sorted alphabetically.


function sortedAlphabetically(array) {
    return array.sort()
}

let array =["Teacher","Student","Nurse","Airhostess","Banker"]
let sortAlpha=sortedAlphabetically(array);
console.log(sortAlpha);

// Write a function that takes a string and returns 
// a new string that is a pig Latin translation of the original string.


function pigIt(str){
    let strArr = str.split(' ');
    let pigLatin = [];
  
    for(let word of strArr){
      if((/([a-zA-Z])/).test(word)){
        pigLatin.push(word.substring(1) + word[0] + "ay");
      }else{
        pigLatin.push(word);
      }
    }
    return pigLatin.join(" ");
  }
  let str="buraje"
  console.log(pigIt(str));


//   Write a function that takes two arrays of integers and
//  returns a new array that contains all the integers that are present in both input arrays.

function arraysCommon(array1, array2) {
    const filtered = array1.filter(x => array2.includes(x));
    const uniqueValues = new Set(filtered)
    return Array.from(uniqueValues)
  }

  let array1=[1,2,45,67,1];
  let array2 =[1,34,1,5,77,1];
  console.log(arraysCommon(array1,array2));


//   Write a function that takes a string and returns
//  a new string that is an anagram of the original string.


function anagramString(str1, str2){
    if (str1.length !== str2.length) {
       return false
    }
 
   return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}

console.log(anagramString("Listen", "Silent")) ;
console.log(anagramString("Mary", "arms")) ;


// Write a function that takes an array of integers 
// returns the second highest integer in the array.

function secondHighest(arri) {
  arri.sort(function(c, d) {
    return c - d;
  });
  return arri[1];
}
let arri = [201, 158, 309, 19, 120];
let second = secondHighest(arri);
console.log(second);


// Write a function that takes a string and returns
//  true if the string is a valid email address and false otherwise.


function validateEmail(email) {
  var e = /\S+@\S+\.\S+/;
  return e.test(email);
}
    
console.log(validateEmail('my email is vallary@buraje.com')); 
console.log(validateEmail('my email isvallary@buraje. com')); 



// Write a function that takes an array of integers and 
// returns the sum of the squares of all the odd numbers in the array.

function numbers(l, r) {
  var f = [],
      i = Math.floor(l / 2) * 2 + 1; 

  while(i <= r) {
      f.push(i);
      i += 2;
  };
  return f;        
}

console.log(numbers(10, 12));
console.log(numbers(13, 17));


// Write a function that takes a string and returns a new string 
// that is a capitalized version of the original string, with the 
// exception of articles, prepositions, and conjunctions
//  (such as "the", "a", "an", "in", "on", "and", etc.)


function capitalizeString(string) {
  const smallWords = ['the', 'a', 'an', 'and', 'in', 'on']; 
  const words = string.split(' ');
  const capitalizedWords = words.map((word) => {
    if (smallWords.includes(word.toLowerCase())) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return capitalizedWords.join(' ');
}
console.log(capitalizeString(string));

