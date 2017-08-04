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
//initializes the the called functions into the console
function init(){
    wordBlanks();
    reusableFunction();

  // this doesn't do anything yet (except logging),
  // but the HTML file automatically calls it
  // whenever the "body" of the document is loaded

console.log("The body of the page has loaded.");

}
