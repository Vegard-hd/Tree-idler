//grow trees to generate money $

//Spend money to upgrade and grow more trees to make more $

// Tree takes time to grow?

let currency = 0;
$(document).ready(function () {
	$("#pic1").click(function () {
		currency += 1;
		$("#moneyDisplay").text(currency);
		console.log(currency);
	});
});

function spendMoney(currency) {
	//spends currency to add some sort of multiplier
}
