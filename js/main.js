$(document).ready(function() {
	$("#gamearea").hide();
	inputall();

	$("#answer").click(function() {count()});
	$("#ce").click(function() {ce()});
});



var clickNumber = 0;
function clock(){
    var s=60;
    var int = setInterval(function(){
        s=s-1;
        $("#title").text(s);
        if (s<=0){
        clearInterval(int);
        lose();
        }
    }, 1000);
    return int
}

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

function add(x) {
	$('#equation').val($('#equation').val()+ $(x).val());
}

function inputnumber(x) {
	$(x).click(function() {
        clickNumber = clickNumber+1;
		add(x);
		$(x).hide();
		$(".numbtn").fadeOut();
		$(".signbtn").fadeIn();
        if (clickNumber>=4){
            $("#answer").show();
        }
	});
}

function inputsign(x) {
	$(x).click(function() {
		add(x);
		$(".signbtn").fadeOut();
		$(".numbtn").fadeIn();
	});
}

function lose(){
    alert("时间结束！你失败了!");
    $("#gamearea").hide();
    $("#title").text("Cool24");
    if(document.body.clientWidth<700){
        $("#gamearea").html("<h1 class='center'>快到右上角分享给你的微信好友吧！</h1>");
        document.title = "我居然败给这个24点游戏，快来帮我挑战一下!";
    }
}


function count() {
    var words="";
	var count = $("#equation").val();
    var evals = eval(count);
	var answer = Math.abs(evals-24);

	if (answer<0.5) {
		words = "你胜利了!\n你的最终结果为"+count+"=24";
        if(document.body.clientWidth<700){
            $("#gamearea").html("<h1 class='center'>快到右上角分享给你的微信好友吧！</h1>");
            document.title = "我轻松的做出了这个24点，你也来挑战一下!";
        }
	} else{
        words = "你失败了!\n"+"你的最终结果为"+count+"="+evals;
        if(document.body.clientWidth<700){
            $("#gamearea").html("<h1 class='center'>快到右上角分享给你的微信好友吧！</h1>");
            document.title = "我居然败给这个24点游戏，快来帮我挑战一下!";
        }
	}
	alert(words);
	return words;
}