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
		$("#button").hide();

	});

	//Generate a random number for each crystal between 1-12
	var rubyNum = Math.floor(Math.random() * (12-1)+1);
	var diamondNum = Math.floor(Math.random() * (12-1)+1);
	var yellowNum = Math.floor(Math.random() * (12-1)+1);
	var emeraldNum = Math.floor(Math.random() * (12-1)+1);

	console.log(rubyNum, diamondNum, yellowNum, emeraldNum);

	//Player clicks on a crystal, number is added to score and revealed

	$("#ruby").click(function(){
		totalScore = rubyNum + totalScore;
		console.log(totalScore);
		$("#totalScore").text(totalScore);
		$("#ruby").replaceWith("<h2>" + rubyNum + "</h2");
	});

	$("#diamond").click(function(){
		totalScore = diamondNum + totalScore;
		console.log(totalScore);
		$("#totalScore").text(totalScore);
		$("#diamond").replaceWith("<h2>" + diamondNum + "</h2");
	});

	$("#yellow").click(function(){
		totalScore = yellowNum + totalScore;
		console.log(totalScore);
		$("#totalScore").text(totalScore);
		$("#yellow").replaceWith("<h2>" + yellowNum + "</h2");
	});

	$("#emerald").click(function(){
		totalScore = emeraldNum + totalScore;
		console.log(totalScore);
		$("#totalScore").text(totalScore);
		$("#emerald").replaceWith("<h2>" + emeraldNum + "</h2");
	});
	//If score equals the random number, the player wins. Wins increases by one and game resets

	//If score is less than the random number, keep playing

	//If score is more than the random number, player looses. Losses increases by one and game resets.
















});