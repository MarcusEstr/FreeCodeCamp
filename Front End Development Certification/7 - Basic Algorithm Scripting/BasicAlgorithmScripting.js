//basic algorithm scripting



//Check for Palindromes

function palindrome(str) {
  //RegExp used to remove non-alpha numeric chars (\W). (/g global)
  var alphaNumerString = /[\W_]/g;
  //Get string as lowercase and store in a var.
  var lowerRegStr = str.toLowerCase().replace(alphaNumerString, '');
  //Reverse that string and store in a var.
  var reverseStr = lowerRegStr.split('').reverse().join(''); 
  return reverseStr === lowerRegStr;
}

palindrome("eye");



//Find the Longest Word in a String
function findLongestWord(str) {
  var strArray = str.split(' ');
  var biggestWord = '';
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i].length > biggestWord.length) {
      biggestWord = strArray[i];
    }
  }
  return biggestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");



//Title Case a Sentence
function titleCase(str) {
  var lowerCaseString = str.toLowerCase();
  var strArray = lowerCaseString.split(' ');
  
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(' ');
}

titleCase("I'm a little tea pot");

//Return Largest Numbers in Arrays
//arr[subarray][items in subarray]
//return arr[i][j];
function largestOfFour(arr) {
  var largestArray = [];

  //Move through each sub-array.
  for (var i = 0; i < arr.length; i++) {
    var biggestNum = 0;
    //Move through each element in the specific sub-array.
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > biggestNum) {
        biggestNum = arr[i][j];
      } 
    } //Push biggestNum result to array, then we'll try next sub-array.
    largestArray.push(biggestNum);
  }
  
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




//Confirm the Ending
function confirmEnding(str, target) {
//substring() method is a number. 
//Start from that number to extract the ending portion of str into substringStr.
  var substringStr = str.substring(str.length - target.length);
  if (substringStr == target){
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");


//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  //If num > 0, then we can proceed with for statement. 
  if (num > 0) {
    //Iterate through until i < num, adding str to repeatedString each loop.
    for (var i = 0; i < num; i++) {
      repeatedString += str;
    }
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);



//Truncate a String
function truncateString(str, num) {
  var truncatedStr = "";
  //If your given number is less than 3.
  //Simply append "..." as needed.
  if (num <= 3){ //If string length is greater than num.
    if (str.length > num) {
      truncatedStr = str.slice(0, num) + "...";
    } else {//if str.length <= num
      truncatedStr = str;
    }
    
  } else { //if your given number is greater than 3.
    //Remove three chars from end of truncatedStr to replace with "..."
    if (str.length > num) { //If string length is greater than num.
      truncatedStr = str.slice(0, num - 3) + "...";
    } else {//if str.length <= num
      truncatedStr = str;
    }
  }
  return truncatedStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);



//Chunky Monkey
//arr.slice(begin, end)
function chunkArrayInGroups(arr, size) {
  var arrayChunks = [];
  while (arr.length > 0) {
    arrayChunks.push( arr.splice(0, size) );
  }
  return arrayChunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



//Slasher Flick
//myFish.splice(2, 1); // remove 1 item at 2-index position
function slasher(arr, howMany) {
  var splicedArray = [];
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);



//Mutations
function mutation(arr) {
  //return arr;
  var firstArray = [];
  var secondArray = [];
  
  firstArray = arr[0].toLowerCase().split('');
  secondArray = arr[1].toLowerCase().split('');
  
  for (var i = 0; i < secondArray.length; i++) {
    if (firstArray.indexOf(secondArray[i]) < 0) {
      return false;
    }
   
  }
  return true;
}

mutation(["hello", "hey"]);



//Falsy Bouncer
//var longWords = words.filter(function(word){
//  return word.length > 6;
//})
function bouncer(arr) {
  //Values are turned into Booleans. Falsy values are omitted. 
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);



//Seek and Destroy
function destroyer(arr) {
  var myArguments = Array.prototype.slice.call(arguments);
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < myArguments.length; j++) {
      //If array element is same as nth argument, remove it.
      if (arr[i] === myArguments[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



//Where Do I Belong
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    } 
  }
  return arr.length;
}

//getIndexToIns([40, 60], 50);

getIndexToIns([2, 5, 10], 15);