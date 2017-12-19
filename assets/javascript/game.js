$( document ).ready(function() {

	var wins = 0;
	var losses = 0;
	var totalScore = 0;

	//Generate a random number between 19-120
	var randNum = Math.floor(Math.random() * (120-19)+19);

	//Generate a random number for each crystal between 1-12
	var rubyNum = Math.floor(Math.random() * (12-1)+1);
	var diamondNum = Math.floor(Math.random() * (12-1)+1);
	var yellowNum = Math.floor(Math.random() * (12-1)+1);
	var emeraldNum = Math.floor(Math.random() * (12-1)+1);

	console.log(rubyNum, diamondNum, yellowNum, emeraldNum);

	//on click of a button, random number will be displayed
	$( "#button" ).click(function() {
		$("#randNum").html("<div>" + randNum + "</div>");
		$("#button").hide();
	});

	//Player clicks on a crystal, number is added to score

	$("#ruby").click(function(){
		totalScoreUpdate(rubyNum);
	});

	$("#diamond").click(function(){
		totalScoreUpdate(diamondNum);
	});

	$("#yellow").click(function(){
		totalScoreUpdate(yellowNum);
	});

	$("#emerald").click(function(){
		totalScoreUpdate(emeraldNum);
	});


	//If score equals the random number, the player wins. Wins increases by one and game resets
	//If score is more than the random number, player looses. Losses increases by one and game resets.
	if (randNum === totalScore){
		console.log("is this fucking working");
		wins++;
		$("#wins").html("<div>" + wins + "</div>");
		reset();
	} else if (totalScore > randNum){
		losses++;
		$("#losses").html("<div>" + losses + "</div>");
		reset();
	}


	//*********************Functions*******************************
	function totalScoreUpdate(crystalNum){
		totalScore = crystalNum + totalScore;
		$("#totalScore").html("<div>" + totalScore + "</div");
	}

	function reset(){
		totalScore = 0;
		$("#button").show();
	}
















});