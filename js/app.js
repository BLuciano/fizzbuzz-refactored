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
			$(".message").text("FizzBuzzing " + count + "...");
			fizzbuzz(count);
		}
	});
});

function fizzbuzz(count){
	console.log("getting ready to fizzbuzz you!");
}