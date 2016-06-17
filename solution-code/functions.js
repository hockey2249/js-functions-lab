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
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// Question 4
function multiplyArray(arr) {
  var product = arr[0];
  for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}


// Question 5
var numberOfArguments = function(){
  return args.length
}



// Question 6
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};


// Question 6 alternative answer

reverseString = function(){ 
  return this.split('').reverse().join('');
};

// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}


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
function charactersOccurencesCount(stringToCount) {
  var characters = {};
  // replacing all Capitals by Lowercase letters and removing spaces
  var stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  stringToCount.split("").forEach(function(l){
    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
  });
  return characters;
}
