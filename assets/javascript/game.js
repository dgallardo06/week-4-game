$( document ).ready(function() {

	var randNum = "";
	var wins = 0;
	var losses = 0;
	var totalScore = 0;


	//Generate a random number between 19-120 on click of a button
	$( "#button" ).click(function() {
		randNum = Math.floor(Math.random() * (120-19)+19);
		console.log(randNum);
		$("#randNum").text(randNum);
		$("#button").remove();

	});

	//Generate a random number for each crystal between 1-12
	var rubyNum = Math.floor(Math.random() * (12-1)+1);
	var diamondNum = Math.floor(Math.random() * (12-1)+1);
	var yellowNum = Math.floor(Math.random() * (12-1)+1);
	var emeraldNum = Math.floor(Math.random() * (12-1)+1);

	console.log(rubyNum, diamondNum, yellowNum, emeraldNum);

	//Player clicks on a crystal, number is added to score and revealed

	$("#ruby").click(function(){
		totalScore = 
	});

	//If score equals the random number, the player wins. Wins increases by one and game resets

	//If score is less than the random number, keep playing

	//If score is more than the random number, player looses. Losses increases by one and game resets.
















});