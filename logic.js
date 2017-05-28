//function takes range returns random number 

var game = {
	wins: 0,
	losses: 0,
	card1: 0,
	card2: 0,
	card3: 0,
	card4: 0,
	want: 21,
	have: 0,
}


//button one
$( "#b1" ).click(function() {
	game.card1 = randNum(3);
	numberComparison(game.want, game.card1, game.have);
});
//button two
$( "#b2" ).click(function() {
	game.card2 = randNum(7);
	numberComparison(game.want, game.card2, game.have);
});
//button three
$( "#b3" ).click(function() {
	game.card3 = randNum(12);
	numberComparison(game.want, game.card3, game.have);
});
//button four
$( "#b4" ).click(function() {
	game.card4 = randNum(5);
	numberComparison(game.want, game.card4, game.have);
});

function reset() {
	game.want = randNum(21);
	$('#have').html("Have: " + game.have);
	$('#want').html("Want: " + game.want);
	$('#bottomMsg').html("Losses: " + game.losses);
	$('#bottomMsg').html("Count: " + game.have);
}

function randNum (maxNum) {
	var x = Math.floor(Math.random() * (maxNum - 0)) + 1;
	return x;
}

function numberComparison (want, rand, have) {
	game.have = have + rand;
	console.log(game.have);
	if (game.want > game.have) {
		$('#bottomMsg').html("You got: " + rand);
		$('#have').html("Have: " + game.have);
		console.log("im here!");
	} else if (game.want === game.have) {
		$('#bottomMsg').html("You got it, keep going!");
		game.wins = game.wins + 1;
		$("#wins").html("Wins: " + game.wins);
		game.have = 0;
		$("#have").html("Have: " + game.have);
		console.log("im here 2");
	} else if (game.want < game.have) {
		$('#bottomMsg').html("You got: " + rand + " and Busted!");
		game.losses = game.losses + 1;
		$("#losses").html("Losses: " + game.losses);
		game.have = 0;
		$("#have").html("Have: " + game.have);
		console.log("im here 3");
	}

}
















