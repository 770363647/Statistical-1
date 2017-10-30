//初始化
function init() {
	createYearList();
	register_event();
	area_ganged_spinner();
}

//创建年份下拉选择列表
function createYearList() {
	var min_year = 1949; //最小可选择年份,默认为1949
	var date = new Date();
	//获取当前年
	var cur_year = date.getFullYear();
	var code = "";
	for(var i = cur_year; i >= min_year; i--) {
		code += '<li  onclick=year_item_click(' + i + ')> ';
		code += i;
		code += '</li>';
	}
	$(".year ul").find("li").remove();
	$(".year ul").append(code);
}

var userTypeListIsShow = false; //用户类型选择下拉框列表项目是否显示
var yearListIsShow = false; //年份选择下拉框列表项目是否显示
//给按钮注册事件
function register_event() {
	//注册按钮点击事件
	$(".register").click(function() {
		location.href = "register.html";
	});
	//用户类型下拉选择框点击事件
	$(".user-type-bt").click(function() {
		var visiblity = userTypeListIsShow == false ? "visible" : "hidden";
		var opacity = userTypeListIsShow == false ? 1 : 0;
		userTypeListIsShow = userTypeListIsShow == false ? true : false;
		$(".user-type ul").eq(0).css("visibility", visiblity);
		$(".user-type ul").eq(0).css("opacity", opacity);
	});
	//年份下拉选择框点击事件
	$(".year-bt").click(function() {
		var visiblity = yearListIsShow == false ? "visible" : "hidden";
		var opacity = yearListIsShow == false ? 1 : 0;
		yearListIsShow = yearListIsShow == false ? true : false;
		$(".year ul").eq(0).css("visibility", visiblity);
		$(".year ul").eq(0).css("opacity", opacity);
	});

	//忘记密码按钮点击事件
	$(".forget-pw").click(function() {
		$(".cover").css("visibility", "visible");
		$(".forget-pw-info").css("margin-top", "360px");
	});

	$(".login-bt").click(function() {
		//判空检查
		if($(".account input").val() == "") {
			alert("请输入账号");
			return;
		} else if($(".password input").val() == "") {
			alert("请输入密码");
			return;
		} else if($(".year span").text() == "年份") {
			alert("请选择年份");
			return;
		} else if($(".user-type span").text() != "管理员") {
			if($(".city span").text() == "城市") {
				alert("请选择地区");
				return;
			}
		}
		var username = $(".account input").val();
		var password = $(".password input").val();
		var year=$(".year-bt span").text();
		var userpower = 0;
		switch($(".user-type span").text()) {
			case '管理员':
				userpower = 1;
				break;
			case '超级用户':
				userpower = 2;
				break;
			case '普通用户':
				userpower = 0;
				break;
			default:
				break;
		}
		//登录信息错误返回
	/*	if(!checkLoginInfo(username, password, userpower,year))
			return;*/
		var userType = $(".user-type-bt span").text();
		var area = cur_country + "," + cur_province + "," + cur_city + "," + cur_county;
		var year = " " + $(".year span").text();
		if(userType == "管理员") {
			var url = "html/administrator.html?year=" + year;
			location.assign(encodeURI(url));
		} else {
			var url = "html/user.html?userType=" + userType + "?area=" + area + "?year=" + year;
			location.assign(encodeURI(url));
		}

	});
}

//用户类型下拉列表项被点击
function user_type_item_click(type) {
	var str = $(".user-type span").eq(0).text(type);
	$(".user-type ul").eq(0).css("visibility", "hidden");
	$(".user-type ul").eq(0).css("opacity", "0");
	userTypeListIsShow = false;
	user_type = type;
	if(type == '管理员') {
		$('.area-select').css("height", '0px');
		$('.area-select button').css("visibility", "hidden");
		resetSpinner();
	} else {
		$('.area-select').css("height", '50px');
		$('.area-select button').css("visibility", "visible");
	}
}
//年份下拉列表项被点击
function year_item_click(year) {
	var str = $(".year span").eq(0).text(year);
	$(".year ul").eq(0).css("visibility", "hidden");
	$(".year ul").eq(0).css("opacity", "0");
	yearListIsShow = false;
}
//关闭忘记密码弹窗
function closePopWindow() {
	$(".forget-pw-info").css("margin-top", "-200px");
	$(".cover").css("visibility", "hidden");
}

//登录信息审核
function checkLoginInfo(username, password, userpower) {
	var url = 'http://192.168.1.102:8080/Statistic/User/userindex';
	var json = '{';
	json += 'username: ' + username;
	json += ',password: ' + password;
	json += ',userpower: ' + userpower;
	json += '}';

	$.ajax({
		url: url,
		type: "post",
		dataType: "json",
		data: json,
		cache: false,
		async: false,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus, jqXHR) {
			if('success' == textStatus) {
				return true;
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("登录失败");
			return false;
		}
	});
}