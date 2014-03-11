function getRandom(n) {
	return Math.floor(Math.random() * n + 1)
};
var num1;
var num2;
var num3;
var num4;
var randomtime = 0;

function allrandom() {
	num1 = getRandom(10);
	num2 = getRandom(10);
	num3 = getRandom(10);
	num4 = getRandom(10);
	randomtime = randomtime + 1;
};

function input2() {
	$("#1").text(num1).val(num1);
	$("#2").text(num2).val(num2);
	$("#3").text(num3).val(num3);
	$("#4").text(num4).val(num4);
};
$(document).ready(function() {
	$("#gamestart").click(function() {
		allrandom();
		input2();
		$("#gamearea").fadeIn();
		ce();
		$("#number botton").addClass("btn btn-large btn-block btn-info");
		$("#sign botton").addClass("btn btn-large btn-block btn-success");
		$("#gamestart").text("再来一盘");
	});
});