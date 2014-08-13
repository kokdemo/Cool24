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
	$(".numbtn:hidden,.signbtn:hidden").fadeIn();
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
		$(x).hide();
		$(".numbtn").fadeOut();
		$(".signbtn").fadeIn();
	});
};

function inputsign(x) {
	$(x).click(function() {
		add(x);
		$(".signbtn").fadeOut();
		$(".numbtn").fadeIn();
	});
};

function count() {
	var count = $("#equation").val();
	answer = eval(count);
	if (answer==24) {
		words = "你胜利了!\n你的最终结果为"+count+"=24";
		alert(words);
	} else{
		words ="你失败了!\n你的最终结果为"+count+"="+answer;
		alert(words);
	};
	return words;
	//返回提示的句子
};