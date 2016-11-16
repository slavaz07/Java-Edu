var i = 1;
var buffer = "";

for (i = 1; i <= 100; i++) {
  var buffer = "";
  if (i % 3 == 0 ) {
     buffer += "Fizz";
  }
  if ( i % 5 == 0 ) {
     buffer += "Buzz"; 
  } 
  if (buffer == "") buffer = i;
  console.log( buffer );
    
}
