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

function temp4(a,b) {
    return(
        [a+b,a-b,b-a,a*b,a/b,b/a]
    )
}
var deepCopy = function(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

function is24(number){
    var origin = deepCopy(number);
    for (var i = 0; i < number.length; i++) {
        var a = number[i];
        number.splice(i,1);
        for (var j = 0; j < number.length; j++) {
            var b= number[j];
            number.splice(j,1);
            var temp = temp4(a,b);
            for (var k = 0; k < number.length; k++) {
                var c= number[k];
                number.splice(j,1);
                var d = number[0];
                var temp2 = [];
                temp2 = temp2.concat(temp4(temp[0],c));
                temp2 = temp2.concat(temp4(temp[1],c));
                temp2 = temp2.concat(temp4(temp[2],c));
                temp2 = temp2.concat(temp4(temp[3],c));
                temp2 = temp2.concat(temp4(temp[4],c));
                temp2 = temp2.concat(temp4(temp[5],c));
                var temp3 =[];
                for(var o=0;o<temp2.length;o++){
                    temp3 = temp3.concat(temp4(temp2[o],d));
                }
                for(var q=0;q<temp3.length;q++){
                    if(temp3[q]==24){
                        var signs = ['+','-','-','*','/','/']
                        var sign1 = Math.floor(q/36);
                        var sign2 = Math.floor(q%36/6);
                        var sign3 = q%6;
                        var strings = '';
                        if(sign1 == 2||sign1 ==5){
                            strings += '('+b+signs[sign1]+a+')';
                        }else{
                            strings += '('+a+signs[sign1]+b+')';
                        }
                        if(sign2 == 2||sign2 ==5){
                            strings = '('+c+signs[sign2]+strings+')';
                        }else{
                            strings = '('+strings+signs[sign2]+c+')';
                        }
                        if(sign3 == 2||sign3 ==5){
                            strings = '('+d+signs[sign3]+strings+')';
                        }else{
                            strings = '('+strings+signs[sign3]+d+')';
                        }
                        console.info(q,sign1,sign2,sign3,strings);
                        console.info(eval(strings));
                    }
                }
            }
        }
        number = deepCopy(origin);
    }
}
