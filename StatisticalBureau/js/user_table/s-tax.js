$(document).ready(function() {
	$(".calculate").css("display","initial");
	init();
});

function resize() {
	var _width = $('.table-div').width();
	$('.table-div th:first-child').width(_width * 0.3);
	$('.table-div td:first-child').width(_width * 0.3);
	$('.table-div th:nth-child(2)').width(_width * 0.3);
	$('.table-div td:nth-child(2)').width(_width * 0.3);
	$('.table-div th:nth-child(3)').width(_width * 0.4);
	$('.table-div td:nth-child(3)').width(_width * 0.4);
}

//TODO:计算
function calculate() {
	$(".body").css("display", "block");
	loading("正在计算...");
	var url = 'http://192.168.1.102:8080/Statistic/taxCaculate/subTaxGet';
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
			failure("计算失败");
		}
	});
}