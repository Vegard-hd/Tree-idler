//grow trees to generate money $

//Spend money to upgrade and grow more trees to make more $

// Tree takes time to grow?


//Global variables
var money = 0;
var multiplier = 1;

//onclick function calls
$(function () {
	$("#tree1").click(function () {
		gainMoney(multiplier);
	});
	$("#tree2").click(function () {
		gainMoney(multiplier);
	});
	$("#tree3").click(function () {
		gainMoney(multiplier);
	});
	$("#tree4").click(function () {
		gainMoney(multiplier);
	});
});

function gainMoney(multiplier) {
	console.log("clicked");
	money += 1 * multiplier;
	$("#moneyDisplay").text(money);
}

function spendMoney(currency) {
	//spends currency to add some sort of multiplier
}
