$(document).ready(function() {
	$("body").css("opacity", "1");

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

//TODO：查找
function find() {
	showTipBox();
	loading("正在查询...");
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
				code += '<td contentEditable="true">' +1+ '</td>';
				code += '<td contentEditable="true">' +2+ '</td>';
				code += '<td contentEditable="true">' +3+ '</td>';
				code += '</tr> ';

				$(".body table tbody").append(code);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//查询失败
			failure("查询失败");
		}
	});
}

//显示提示框
function showTipBox() {
	$(".tip").css("display", "block");
	$(".tip").css("display");
	$(".tip").css("opacity", "1");
}