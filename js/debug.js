console.log("Hello Debuggers!"); //added semicolon

document.addEventListener('DOMContentLoaded', function(){ //capitalized the C in content
  console.log("Let's learn how to debug.");

  var x = 2;
  let result = Math.pow(x, x); //expects 2^2 equals 4 // power should be pow (src https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)//
  console.log("Got", result, "Expected 4");

  let y = 4; //removed one = sign
  let result2 = y + x; //expect 4 + 2 equals 6
  console.log("Got", result2, "Expected 6");

  let z = { width: 5, height: 7};
  console.log("z is ", z.width, "inches wide."); //expect "z is 5 inches wide" // removed get before width, and () after because you're only trying to get the width value from th eline above

  let q = 100;
  if(q > 50) { //semicolon was not necessary
    console.log("q is a big number"); //this is what should print to the console
  } else {
    console.log("q is less than 50 dawg")
  };

  let amount = 13;
  console.log(amount + 13); //should print out 26 // removed var as that is already established in the line above

  const num = "37";
  if(num === "5") { //needed === because we are testing strict equality
    console.log("My num is", num); //This should not get printed since num is "37"
  }

  var jackson = "dope dude";
  if(typeof jackson === "string") { //if statements always followed by soft boys and then curly boys
    console.log("jackson is a", jackson);//should print "jackson is a dope dude", which is true
  }

  var actorOfTheCentury = "Nicolas Cage"; //did not need to change anything here because this is a damn true statement
  console.log(actorOfTheCentury, "is a God of excellence and beauty"); //should print "Nicolas Cage is a God of excellence and beauty" which is also true. //needed camel case

  var bestMovieEver = "American Treasure" //changed single quote to double to match the string
  console.log(bestMovieEver);//should print "American Treasure"

  document.getElementById("finish").innerText = "YOU'RE ALL DONE!!";
});
