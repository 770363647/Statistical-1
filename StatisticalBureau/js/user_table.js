//初始化
function init() {
	$("body").css("opacity", "1");
	register_drag_event();
}
//显示内容体
function showBody() {
	$(".body").css("visibility", "visible");
	$(".body").css("opacity", "1");
}

var isDown = false; //图标是否向下
//TODO:给上下拉图片注册事件
function register_drag_event() {
	$("#drag").click(function() {
		var top = isDown == false ? "-160px" : "0px";
		var rotate = isDown == false ? "rotate(180deg)" : "rotate(0deg)";
		isDown = isDown == false ? true : false;
		$(".wrap").css("top", top);
		$("#drag").css("transform", rotate);
	});
}

//TODO:关闭提示信息
function closeTip() {
	window.clearInterval(rotate);
	$(".tip").css("opacity", "0");
	$(".tip").css("display");
	$(".tip").css("display", "none");
}

//TODO:显示提示信息
function showTip() {
	window.clearInterval(rotate);
	$(".tip").css("opacity", "1");
	$(".tip").css("display");
	$(".tip").css("display", "block");
}

var rotate;

function loading(str) {
	showTip();
	$(".tip img").attr("src", "../../img/loading.png");
	$(".tip p").text(str);
	var deg = 30;
	var count = 0;
	rotate = setInterval(function() {
		$(".tip img").css("transform", "rotate(" + count * deg + "deg)");
		count++;
		if(count == 360 / deg)
			count = 1;
	}, 100);
}

//TODO：加载成功
function loadSuccess() {
	$(".tip img").attr("src", "");
	$(".tip p").text("加载成功");
	setTimeout(function() {
		closeTip();
	}, 3000);
	$(".body").css("display", "block");
	$(".table-div").css("visibility", "visible");
	$(".table-div table").css("display", "block");
	$(".table-div table").css("display");
	$(".table-div table").css("opacity", "1");
	showDownloadBt();
	showPrintBt();
	resize();
}
//TODO:失败
function failure(str) {
	window.clearInterval(rotate);
	$(".tip img").attr("src", "../../img/failure.png");
	$(".tip img").css("transform", "rotate(0deg)");
	$(".tip p").text(str);
}
//TODO:上传成功
function uploadSuccess() {
	closeTip();
}
//TODO:上传失败
function uploadFailure() {
	window.clearInterval(rotate);
	$(".tip img").attr("src", "../../img/failure.png");
	$(".tip img").css("transform", "rotate(0deg)");
	$(".tip p").text("上传失败");
}

//TODO:显示上传按钮
function showUploadBt() {
	$(".upload").css("display", "initial");
}

//TODO:显示下载按钮
function showDownloadBt() {
	$(".download").css("display", "initial");
}

//TODO:显示打印按钮
function showPrintBt() {
	$(".print").css("display", "initial");
}