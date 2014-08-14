var numberList= new Array(4);
function getRandom() {	
	for (var i = 3; i >= 0; i--) {
		numberList[i] = Math.floor(Math.random() * 10 + 1);
	};
	return numberList;
};

function inputNumber(numberList) {
	for (var i = 3; i >= 0; i--) {
		$("#"+(i+1)).text(numberList[i]).val(numberList[i]);
	};
};

var nextPar;
function changeURL(){
	var local_url = document.location.href;
	var nextPar = local_url.indexOf("?");
	if (nextPar == -1) {
		var	get_par = local_url.slice(0,local_url.length);
	}else{
		var	get_par = local_url.slice(0,nextPar);
	};
    get_par = get_par+"?"+numberList[0]+","+numberList[1]+","+numberList[2]+","+numberList[3];
    var state = ( {
        url: get_par, title: "Cool24"
    } );
    window.history.pushState(state, "Cool24", get_par);
    //document.location.href = get_par;
	return get_par;
}

function getURLPar() {
	var get_par = "";
	var local_url = document.location.href;
	var nextPar = local_url.indexOf("?");
	if (nextPar != -1) {
		get_par = local_url.slice(nextPar+1, local_url.length);
	};
	var substr = ",";
	var arrTmp = new Array();
	var i = 0,
		j = 0,
		k = get_par.length;
	while (i < k) {
		j = get_par.indexOf(substr, i);
		if (j != -1) {
			if (get_par.substring(i, j) != "") {
				arrTmp.push(get_par.substring(i, j));
			}
			i = j + 1;
		} else {
			if (get_par.substring(i, k) != "") {
				arrTmp.push(get_par.substring(i, k));
			}
			i = k;
		}
	}
	return arrTmp;
};
var xint;
function addwords(array){
    $("#gamearea").fadeIn();
    inputNumber(array);
    $("#number button").addClass("btn btn-large btn-block btn-info");
	$("#sign button").addClass("btn btn-large btn-block btn-success");
    $("#gamestart").text("再来一盘");
    $("#answer").hide();
    xint = clock(60);
}

function ce() {
	$("#equation").val("");
	$("#number div,#number button,#sign button").show();
    //clearInterval(xint);
    //xint = clock(60);
    document.title = "Cool24";
}

$(document).ready(function() {
	var arrayList = getURLPar();
	if (arrayList.length != 0) {
        addwords(arrayList)
	};
	$("#gamestart").click(function() {
        clearInterval(xint);
		addwords(getRandom());
        ce();
        changeURL();
	});
});