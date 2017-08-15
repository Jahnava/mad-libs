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

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line


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

//initializes the the called functions into the console
function init(){
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
