//wordblanks function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

  var result = "My " + myNoun + " Tucker is really " + myAdjective + " and it " + myVerb + " really " + myAdverb;
  return result;
}
wordBlanks("dog", "big", "ran", "quickly");

//reusableFunction
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

//timesFive
function timesFive(num) {
  return num * 5;
}
var answer = timesFive();

//strict not equal
function testStrictNotEqual(val) {
    if (val !==17) {
  return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

//true or false if statement
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
trueOrFalse(true);

//testing for greater or equal
function Apples(val) {
  if (val >= 20) {
    return "squished 20 or more Apples";
  }
  if (val >= 10) {
    return "squished 10 or more apples";
  }
  return "squished nine or less apples";
}

Apples(20); //change number in console to test


function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value in console to test
testLessThan(10);

//return the number that is greater than val. change testGreaterThan(number) to get a new answer in the console.
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(11); //change number in console to test

//if the value is less than or equal to 50 and greater than orequal to 25 the console will return the string "yes" otherwise it'll return no.
function testLogicalAnd(val) {

  if (val <= 50 && val >= 25) {
     {
      return "Yes";
    }
  }

//else and else if test numbers in the console
function testElseIf(val) {

  if (val > 10) {
    return "Greater than 10";

  } else if (val < 5) {
    return "Smaller than 5";

  } else {
  return "Between 5 and 10";
}
}
  return "No";
}

// Change this in console to test
testLogicalAnd(10);


//switch statement
function switchOfStuff(val) {
  var answer = "";

switch (val){
case 'a':
answer = "apple";
break;
case 'b':
answer = "bird";
break;
case 'c':
answer = "cat";
break;
default:
answer = "stuff";
}
  return answer;
}
// Change this in console to test
switchOfStuff(1);

//changed if else chain to switch statement
function chainToSwitch(val) {
  var answer = "";
  switch(val){
    case "bob": answer="Marley"; break;
    case 42: answer="The Answer"; break;
    case 1: answer= "There is no #1"; break;
    case 99: answer="Missed me by this much!"; break;
    case 7: answer="Ate Nine"; break;
  }

  return answer;
}


function isLess(a, b) {
switch (true) {
case a < b:
answer = true;
break;
case a > b:
answer = false;
break;
}
return answer;
}

// Change these values to test
isLess(10, 15);


//if else if statement
function testSize(num) {
 if (num < 5) {
  return "Tiny";
}
  else if (num < 10) {
  return "Small";
}
  else if (num <15) {
  return "Medium";
}
  else if (num < 20) {
  return "Large";
}
  else
  return "Huge";

}

// Change this value to test in console
testSize(7);

// return pattern for function
function awesome(a, b){
  if (a< 0 || b< 0)
  return;

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

//object called myDog
var myDog = {
  "name":"Tucker",
  "legs":60,
  "tails":4,
  "friends": ["yessss"]
};

//Accessing Objects Properties with the Dot Operator
 var unicorn = {
   "mane": " long multicolor with glitter",
   "body": "robust, white, and shiny",
   "hoofs": "worn"
 };

 var maneValue = unicorn.mane;
 var bodyValue = unicorn.body;


//testing objects for Properties
var adventure ={
  mainDude: "mouse",
  objective: "cheese",
  where: "house",
};

function checkObj(leapInAir) {
  if (adventure.hasOwnProperty(leapInAir)) {
    return adventure[leapInAir];
  } else {
    return "not found";
  }
}

//nested object
var Tea ={
  "cup":{
    "inside": {
      "tea cup": "chamomile",
      "tea bag": "herbs"
    },
    "outside":{
      "table":"coaster"
    }
  }
};

//accessing nested object using bracket notation and by assigning cup, inside, etc.
var drink =
Tea.cup.inside["tea cup"]; //this equals chamomile

//Iterate Through an Array with a For Loop
var cryingBaby = [2, 3, 4, 5, 6];
var sleep = 0;

for (var jaya = 0; jaya < cryingBaby.length; jaya++) {
sleep += cryingBaby[jaya];
}

//nesing for loops
function multiplyAll(arr){
  var product = 1;

  for (var i=0; i< arr.length; i++){
    for (j=0; j < arr[i].length; j++) {
      product*=arr[i][j];

    return product;
    }
    multiplyAll([[1,2],[3,4],[5,6,7]]);
  }
}

//while loop -runs while specific condition is true and stops when condition is no longer true

var jahnavaArray = [];
var i = 0;
while(i < 5){
  jahnavaArray.push(i);
  i++;
}

//generate random fractions
function thisIsRandom() {
  return Math.random();
}

//generate random whole numbers
var RandomWholeNumbers =
Math.floor(Math.random()*20);

function WholeNum(){
  return Math.floor(Math.random() * 10);
}

//sifting trough text by using //gi to select specifc wordBlanks
var someWords = "I like to write words because words are good for expressing thoughts.";

var selectingWords = /words/gi;
var wordsCount = someWords.match(selectingWords).length;

//sifting through a sentence to find numbers using /\d/g d=digit g=global

var testString = "there are 2 apples and 1 orange.";

var selectNumbers = /\d+/g;

// This code counts the matches of expression in testString
var digitCount = testString.match(selectNumbers).length;

//selceting spaces

var spaceyStuff = "How many spaces are there in this sentence?";

var howManySpaces = /\s+/g;

// This code counts the matches of expression in testString
var spaceCount = testString.match(howManySpaces).length;

//construct objects with functions
var Foot = function() {
  this.toes = 5;
  this.malleolus = 2;
  this.heel = 1;
};

//using .reduce to add up the sum of my array. The sum will show up in the console once the numbers in the array have been added
var array = [2,3,4,5,6];
var singleVal =0;
var singleVal = array.reduce(function(previousVal, currentVal){
  return previousVal + currentVal;
}, 0);

//initializes the the called functions into the console
function init(){
   awesome();
    wordBlanks();
    reusableFunction();
    timesFive();
    testStrictNotEqual();
    trueOrFalse();
    testGreaterThan();
    Apples();
    testLessThan();
    testLogicalAnd();
    testSize();
    switchOfStuff();

  // this doesn't do anything yet (except logging),
  // but the HTML file automatically calls it
  // whenever the "body" of the document is loaded

console.log("The body of the page has loaded.");

}
