// Looping a Triangle.
for(var i = 1; i <= 7; i++){
	var output = "#";
	while(output.length<i){
      output = output + "#";
    }
  	console.log(output);
}



// Fizzbuzz.
for(var i = 1; i <= 100; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log("FizzBuzz");
  } else if(i%3 == 0){
    console.log("Fizz");
  } else if(i%5 == 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}



// Chessboard.
var size = 8;
for (var row = 0; row < size; row ++){
  var output = "";
  for (var col = 0; col < size; col++){
    if((row+col)%2 == 0){
      output = output + " ";
    } else {
      output = output + "#";
    }
  }
  console.log(output);
}
