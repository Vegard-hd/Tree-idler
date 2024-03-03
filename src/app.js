//grow trees to generate money $

//Spend money to upgrade and grow more trees to make more $

// Tree takes time to grow?

//Global variables
var money = 0;
var multiplier = 1;
function mpToPercent(multiplier) {
	const percentMp = multiplier * 100 + "%";
	console.log(multiplier);
	return percentMp;
}
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
	//////////////////////

	/////////////
	//Button 1 spendmoney onclick bind
	$("#btn1").click(function () {
		spendMoney();
	});
});

function gainMoney(multiplier) {
	console.log("clicked");
	money += 1 * multiplier;
	$("#moneyDisplay").text(money);
	if (money >= 50) {
		$("#btn1").removeClass("disabled");
	}
}

//spends currency to add multiplier
function spendMoney() {
	console.log("attempted to upgrade!");
	if (money >= 50) {
		console.log("upgraded multiplier by +1!!!");
		money -= 50;
		multiplier += 1;
		$("#mp1").replaceWith(`<b
		id="mp1"
		class="text-info ms-2 h5"
		>${mpToPercent(multiplier)}
	</b>`);
	}
	if (money < 50) {
		$("#btn1").addClass("disabled");
	}
}
