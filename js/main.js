var inputold;
var btn;
var inputnew;
var answer = 0;
$(document).ready(function() {
	$("#gamearea").hide();
	inputall();
	$("#answer").click(function() {count()});
	$("#ce").click(function() {ce()});
});

function inputall(){
	inputnumber("#1");
	inputnumber("#2");
	inputnumber("#3");
	inputnumber("#4");
	$("#plus"    ).val("+");
	$("#subtract").val("-");
	$("#multiply").val("*");
	$("#divide"  ).val("/");
	$("#lbracket").val("(");
	$("#rbracket").val(")");
	inputsign("#plus"    );
	inputsign("#subtract");
	inputsign("#multiply");
	inputsign("#divide"  );
	inputsign("#lbracket");
	inputsign("#rbracket");
}

function ce() {
	$("#equation").val("");
	$("botton:hidden").show();
};

function add(x) {
	inputold = $('#equation').val();
	btn = $(x).val();
	inputnew = inputold + btn;
	$('#equation').val(inputnew);
};

function inputnumber(x) {
	$(x).click(function() {
		add(x);
		$(x).attr("disabled");
		$(x).hide();
		$("#numbers botton").val("");

	});
};

function inputsign(x) {
	$(x).click(function() {
		add(x);
		$("#1").val(num1);
		$("#2").val(num2);
		$("#3").val(num3);
		$("#4").val(num4);
	});
};

function count() {
	var count = $("#equation").val();
	answer = eval(count);
	if (answer==24) {
		alert("你胜利了!\n你的最终结果为"+count+"=24");
	} else{
		alert("你失败了!\n你的最终结果为"+count+"="+answer);
	};
	
};