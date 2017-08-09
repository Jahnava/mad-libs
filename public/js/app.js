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




//initializes the the called functions into the console
function init(){
    wordBlanks();
    reusableFunction();
    timesFive();
    testStrictNotEqual();
    trueOrFalse(wasThatTrue);

  // this doesn't do anything yet (except logging),
  // but the HTML file automatically calls it
  // whenever the "body" of the document is loaded

console.log("The body of the page has loaded.");

}
