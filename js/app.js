$(document).ready(function(){
	var count = "";
	//Grab input value when submit button is pressed
	$('#submit').click(function(){
		count = +$('input').val();
		$('input').val('');
		if(count === 0){
			$(".message").text("Please enter a NUMBER!");
			return;
		}
		if(isNaN(count)){
			$(".message").text("That is not a NUMBER! please enter a WHOLE number");
			return;
		}
		if(count% 1 !== 0){
			$(".message").text("No decimals allowed. Please enter a WHOLE number");
			return;
		} else{
			$(".message").text("Please enter a WHOLE number below and watch the magic happen!!!");
			fizzbuzz(count);
		}
	});
});

function fizzbuzz(count){
	var curr = "";
	$('.results').text("");
	$('.results').append("FizzBuzzing " + count + "<br/>");
	for(var i = 1; i <= count; i++){
		if(!(i % 3)){ 
			curr = "Fizz";
		}
		if(!(i % 5)){
			curr += "Buzz";
		}
		if(!curr){
			curr = i;
		}
		$('.results').append(curr + ", ");
		curr = "";
	}
}