$(document).ready(function() {
	$(".find").css("display", "initial");
	init();
});

function resize() {
	var _width = $('.table-div').width();
	$('.table-div th:first-child').width(_width * 0.25);
	$('.table-div td:first-child').width(_width * 0.25);
	$('.table-div th:nth-child(2)').width(_width * 0.25);
	$('.table-div td:nth-child(2)').width(_width * 0.25);
	$('.table-div th:nth-child(3)').width(_width * 0.25);
	$('.table-div td:nth-child(3)').width(_width * 0.25);
	$('.table-div th:nth-child(4)').width(_width * 0.25);
	$('.table-div td:nth-child(4)').width(_width * 0.25);
}

//TODO：查找
function find() {
	showBody();
	loading("正在查询...");
	var code = '';
	var url = 'http://192.168.1.102:8080/Statistic/IntegratedQuery/classGdpContributeSearch';
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
				code += '<td contentEditable="true">' + '</td>';
				code += '<td contentEditable="true">' + '</td>';
				code += '<td contentEditable="true">' + '</td>';
				code += '</tr> ';

				$(".body table tbody").append(code);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			failure("无查询结果");
		}
	});
}

//TODO:下载
function download() {
	var url = '';
	var json = '';

	$.ajax({
		url: url,
		type: "get",
		dataType: "json",
		data: json,
		cache: false,
		async: false,
		contentType: "application/json; charset=utf-8",
		success: function(data, textStatus, jqXHR) {
			if('success' == textStatus) {
				//下载成功
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			//下载失败

		}
	});
}

//TODO:打印
function print() {

}