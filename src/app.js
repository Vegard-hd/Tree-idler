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
  $("#tree1").on("click", function (e) {
    gainMoney(multiplier);
    disableElement("#tree1");
  });
  $("#tree2").on("click", function (e) {
    gainMoney(multiplier);
    disableElement("#tree2");
  });
  $("#tree3").on("click", function (e) {
    gainMoney(multiplier);
    disableElement("#tree3");
  });
  $("#tree4").on("click", function (e) {
    gainMoney(multiplier);
    disableElement("#tree4");
  });
  //////////////////////

  /////////////
  //Button 1 spendmoney onclick bind
  $("#tree1").on("click", function (e) {
    spendMoney();
  });
});

function gainMoney(multiplier) {
  console.log($(this));
  if (!$("img").hasClass("treepic disabled")) {
    money += 1 * multiplier;
    $("#moneyDisplay").text(money);
    if (money >= 50) {
      $("#btn1").removeClass("disabled");
    }
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

let onOff = true;
function disableElement(target, duration = 1.5) {
  if (onOff === false) {
    console.log("if");
  } else {
    let jqueryTarg = `${target}`;
    $(jqueryTarg).toggleClass("disabled");
    onOff = false;

    // create a timeline
    let tl = gsap.timeline();
    gsap.to("#progress1", {
      width: "100%",
      duration: 2,
      ease: "power1.out",
      onComplete: onComplete,
    });
    tl.to(jqueryTarg, { opacity: 0, duration: `${duration / 2}` });
    tl.to(jqueryTarg, { opacity: 1, duration: `${duration / 2}` });
    function onComplete() {
      console.log("callback");
      $(jqueryTarg).toggleClass("disabled");
      gsap.to("#progress1", {
        width: "0%",
        duration: 0.2,
        ease: "power1.out",
      });
      onOff = true;
      console.log(onOff);
    }
  }
}
