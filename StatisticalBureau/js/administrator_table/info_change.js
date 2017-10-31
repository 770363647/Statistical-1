$(document).ready(function() {
	$("body").css("opacity", "1");
	var code = '';
	for(var i = 0; i < 18; i++) {
		code += '<tr>';
		code += '<td>壹</td>';
		code += '<td contentEditable="true">贰</td>';
		code += '<td contentEditable="true">仨</td>';
		code += '</tr> ';
	}
	$(".body table tbody").append(code);

	resize();
	getContent();
});

function resize() {
	var _width = $('.table-div').width();
	$('.table-div th:first-child').width(_width * 0.4);
	$('.table-div td:first-child').width(_width * 0.4);
	$('.table-div th:nth-child(2)').width(_width * 0.3);
	$('.table-div td:nth-child(2)').width(_width * 0.3);
	$('.table-div th:nth-child(3)').width(_width * 0.3);
	$('.table-div td:nth-child(3)').width(_width * 0.3);
}

//TODO：获取表格内容
function getContent() {
	showTipBox();
	loading("正在加载用户信息...");
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
				code += '<td contentEditable="true">' + 1 + '</td>';
				code += '<td contentEditable="true">' + 2 + '</td>';
				code += '<td contentEditable="true">' + 3 + '</td>';
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