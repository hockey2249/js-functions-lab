// Question 1
function maxOfTwoNumbers(x,y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

// Question 2
function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}

// Question 3
function isCharacterAVowel(c) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(c) !== -1) {
    return true;
  } 
  return false;
}
// Question 4

function sumArray() {
//Define the function sumArray
//We want the function to be able to add a bumch of numbers 
var sum = 0;
var Array = [ ];

for(var i= 0; i < Array.length; i++){
   sum += Array[i];
}
  return sum;
}


// Question 4
function multiplyArray() {
//Define the function multiplyArray
var multiSum = 1;
var Array = [ ];

for(var i= 0; i < Array.length; i++){
   multiSum *= Array[i];
}
  return multiSum;
}


// Question 5
var numberOfArguments = function(){
  return args.length;
}



// Question 6
var reverseString = function (){
  //we want to take some variable 
  // and return the revers order of the variable 
    var arr = str.split('');
    var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
      return revArr.join('');
};


// Question 7
var longestWord = ['Kyle', 'Matt', 'Holly', 'Abe', 'Michael'];

function findLongestWord (longestWord) {
// writing a function that takes the array of words that returns the longest word 
// the function will hae to move through the array 
// find the length of each word 
// return the longest word in the array 
// 
var longest = 0;
for( var i=0; i < longest.length; i++){
  if (longestWord[i].length > longest) {
      longest = longestWord[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord());


// Question 8
var words = [];
var newWords = [];
var i= 4;

function filterLongWords (words) {
  // function needs to take an array of words and number i 
  // function needs to compare each word in the array to the number 
  // then the function needs to return all the words that are longer than the number 
  for (var j = 0; j < words.length; j++){
if (words[j].length > i){
  newWords.push(words[j]);
}
  }
    return newWords;
}

filterLongWords(['Thursday', 'dog', 'cart', 'hello']);
// Bonus 1
function charactersOccurencesCount() {
  
}

