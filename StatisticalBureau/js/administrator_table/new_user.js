$(document).ready(function() {
	$("body").css("opacity", "1");
});
//TODO:添加超级用户
function addSuperUser() {
	$(".super-user").css("display", "block");
	$(".ordinary-user").css("display", "none");
	hiddenTable();
	hiddenBtGroup();
	superUserResize();
	getNewSuperUserInfo();
}
//TODO:添加普通用户
function addOrdinaryUser() {
	$(".ordinary-user").css("display", "block");
	$(".super-user").css("display", "none");
	hiddenTable();
	hiddenBtGroup();
	ordinaryUserResize();
	getNewOrdinaryUserInfo();
}

//超级用户添加表自适应
function superUserResize() {
	var _width = $('.super-user').width();
	$('.super-user th:first-child').width(_width * 0.4);
	$('.super-user td:first-child').width(_width * 0.4);
	$('.super-user th:nth-child(2)').width(_width * 0.3);
	$('.super-user td:nth-child(2)').width(_width * 0.3);
	$('.super-user th:nth-child(3)').width(_width * 0.3);
	$('.super-user td:nth-child(3)').width(_width * 0.3);
}

//普通用户添加表自适应
function ordinaryUserResize() {
	var _width = $('.ordinary-user').width();
	$('.ordinary-user th:first-child').width(_width * 0.25);
	$('.ordinary-user td:first-child').width(_width * 0.25);
	$('.ordinary-user th:nth-child(2)').width(_width * 0.25);
	$('.ordinary-user td:nth-child(2)').width(_width * 0.25);
	$('.ordinary-user th:nth-child(3)').width(_width * 0.25);
	$('.ordinary-user td:nth-child(3)').width(_width * 0.25);
	$('.ordinary-user th:nth-child(4)').width(_width * 0.25);
	$('.ordinary-user td:nth-child(4)').width(_width * 0.25);
}

//隐藏按钮组
function hiddenBtGroup() {
	$(".select-bt-group").css("display", "none");
}

//返回
function back() {
	$(".super-user").css("display", "none");
	$(".ordinary-user").css("display", "none");
	$(".select-bt-group").css("display", "block");
}

//TODO：获取新加超级用户信息
function getNewSuperUserInfo() {
	showTipBox();
	loading("正在加载新加超级用户信息...");
	var code = '';
	var url = 'http://192.168.1.102:8080/Statistic/BaseQuery/gfCoefficientGet';
	var json = '';

	$.ajax({
		url: url,
		type: "post",
		dataType: "json",
		data: json,
		cache: false,
		async: true,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus, jqXHR) {
			if('success' == textStatus) {
				//加载成功
				loadSuccess();
				showTable();
				//遍历数据生成表格
				code += '<tr>';
				code += '<td>' + 1 + '</td>';
				code += '<td>' + 2 + '</td>';
				code += '<td>' + 3 + '</td>';
				code += '</tr> ';

				$(".body .super-user table tbody").append(code);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//加载失败
			failure("加载失败");
		}
	});
}

//TODO：获取新加超级用户信息
function getNewOrdinaryUserInfo() {
	showTipBox();
	loading("正在加载新加普通用户信息...");
	var code = '';
	var url = 'http://192.168.1.102:8080/Statistic/BaseQuery/gfCoefficientGet';
	var json = '';

	$.ajax({
		url: url,
		type: "post",
		dataType: "json",
		data: json,
		cache: false,
		async: true,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus, jqXHR) {
			if('success' == textStatus) {
				//加载成功
				loadSuccess();
				showTable();
				//遍历数据生成表格
				code += '<tr>';
				code += '<td>' + 1 + '</td>';
				code += '<td>' + 2 + '</td>';
				code += '<td>' + 3 + '</td>';
				code += '<td>' + 4 + '</td>';
				code += '</tr> ';

				$(".body .super-user table tbody").append(code);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//加载失败
			failure("加载失败");
		}
	});
}

//显示提示框
function showTipBox() {
	$(".tip").css("display", "block");
	$(".tip").css("display");
	$(".tip").css("opacity", "1");
}

//TODO:显示表格
function showTable() {
	$(".table-div table").css("display", "block");
	$(".table-div table").css("display");
	$(".table-div table").css("opacity", "1");
}
//TODO:隐藏表格
function hiddenTable() {
	$(".table-div table").css("display", "none");
	$(".table-div table").css("display");
	$(".table-div table").css("opacity", "0");
}