$(document).ready(function() {
	$("body").css("opacity", "1");
	getContent();
});

function resize() {
	var _width = $('.table-div').width();
	$('.table-div th:first-child').width(_width * 0.4);
	$('.table-div td:first-child').width(_width * 0.4);
	$('.table-div th:nth-child(2)').width(_width * 0.6);
	$('.table-div td:nth-child(2)').width(_width * 0.6);
}

//TODO：获取表格内容
function getContent() {
	showTipBox();
	loading("正在加载用户权限信息...");
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

				//遍历数据生成表格
				code += '<tr>';
				code += '<td>' + 1 + '</td>';
				code += '<td>';
				code += '<input type="checkbox"><span>数据输入</span></input>';
				code += '<input type="checkbox"><span>数据计算</span></input>';
				code += '<input type="checkbox"><span>数据汇总</span></input>';
				code += '<input type="checkbox"><span>数据查询</span></input>';
				code += '</td>';
				code += '</tr> ';

				$(".body table tbody").append(code);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//加载失败
			failure("加载失败");
		}
	});
}

//TODO:保存
function save() {

}

//显示提示框
function showTipBox() {
	$(".tip").css("display", "block");
	$(".tip").css("display");
	$(".tip").css("opacity", "1");
}