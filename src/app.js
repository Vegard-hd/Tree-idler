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
		disableElement("#tree1");
	});
	$("#tree2").click(function () {
		gainMoney(multiplier);
		disableElement("#tree2");
	});
	$("#tree3").click(function () {
		gainMoney(multiplier);
		disableElement("#tree3");
	});
	$("#tree4").click(function () {
		gainMoney(multiplier);
		disableElement("#tree4");
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

function disableElement(target, duration = 10) {
	let jqueryTarg = `${target}`;
	console.log(jqueryTarg);

	$(jqueryTarg).toggleClass(".disabled");

	// create a timeline
	let tl = gsap.timeline();
	tl.to(jqueryTarg, { opacity: 0, duration: 1.5 });
	tl.to(jqueryTarg, { opacity: 1, duration: 1.5 });
}
