// Ross Willett
// Daily Programmer Challenger 243 - Easy
// https://www.reddit.com/r/dailyprogrammer/comments/3uuhdk/20151130_challenge_243_easy_abundant_and/
//jQuery used to attach a listener to the submit button on page load
//function executed on the click of the button - takes the input
//on each line of the textarea, adds them an array then appends
//a paragraph to the body of the html page with the result of
//the abundOrDef function for each element in the array
$(document).ready(
$('.submitButton').click(function() {
	var input = $('.userInput').val();
	var inputArray = [];
	var temp;
	inputArray = input.split('\n');
	console.log(inputArray);
	$(".results").remove();
	for (var i = 0; i<inputArray.length; i++){
		$("body").append($("<p class='results'>"+abundOrDef(inputArray[i])+"</p>"));
	}
}));
//function used to determine if an input number is abundant or
//deficient - uses the divisor function to get the numbers
//divisors then adds them and compares them to 2 times the input
//number to determine if it is deficient or abundant, then
//returns the result in string format
function abundOrDef(input){
	var num = parseInt(input);
	var divisors = getDivisors(num);
	var sum = 0;
	var result;
	for(i = 0; i<divisors.length; i++){
		sum = sum+ divisors[i];
	}
	if(sum < 2*num) result = num.toString() + " deficient";
	else if(sum>2*num) result = num.toString() + " abundant by " + (sum-2*num).toString();
	else result = num.toString() + " ~~neither~~ deficient";
	return(result);
}
//function used to find a number's divisors - uses the fact
//that a divisor that produces a whole number produces a
//modulus of zero. returns an array with all the input
//number's divisors
function getDivisors(number){
	var divisors = [];
	for(i=0;i<=number;i++){
		if(number%i === 0) divisors.push(i);
	}
	return divisors;
}