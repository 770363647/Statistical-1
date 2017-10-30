$(document).ready(function() {
	$("body").css("opacity", "1");
	init();
	getContent();
});

//TODO:表格自适应处理
function resize() {
	var _width = $('.table-div').width();
	$('.table-div th:first-child').width(_width * 0.1);
	$('.table-div td:first-child').width(_width * 0.1);
	$('.table-div th:nth-child(2)').width(_width * 0.1);
	$('.table-div td:nth-child(2)').width(_width * 0.1);
	$('.table-div th:nth-child(3)').width(_width * 0.2);
	$('.table-div td:nth-child(3)').width(_width * 0.2);
	$('.table-div th:nth-child(4)').width(_width * 0.2);
	$('.table-div td:nth-child(4)').width(_width * 0.2);
	$('.table-div th:nth-child(5)').width(_width * 0.1);
	$('.table-div td:nth-child(5)').width(_width * 0.1);
	$('.table-div th:nth-child(6)').width(_width * 0.1);
	$('.table-div td:nth-child(6)').width(_width * 0.1);
	$('.table-div th:nth-child(7)').width(_width * 0.1);
	$('.table-div td:nth-child(7)').width(_width * 0.1);
	$('.table-div th:nth-child(8)').width(_width * 0.1);
	$('.table-div td:nth-child(8)').width(_width * 0.1);
}

//TODO：获取表格内容
function getContent() {
	loading("正在加载...");
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
		success: function(data) {
			//加载成功
			loadSuccess();
			$.each(data, function(i, n) {

				//遍历数据生成表格
				code += '<tr>';
				code += '<td contentEditable="true">' + 1 + '</td>';
				code += '<td contentEditable="true">' + 2 + '</td>';
				code += '<td contentEditable="true">' + 3 + '</td>';
				code += '<td contentEditable="true">' + 4 + '</td>';
				code += '<td contentEditable="true">' + 5 + '</td>';
				code += '<td contentEditable="true">' + 6 + '</td>';
				code += '<td contentEditable="true">' + 7 + '</td>';
				code += '<td contentEditable="true">' + 8 + '</td>';
				code += '</tr> ';

			});
			$(".body table tbody").append(code);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			failure("无内容,请添加后上传");
			addData();
		}
	});

}

//TODO:上传
function upload() {
	loading("正在上传...");
	var parent = $(".table-div table tbody td");
	var yearAvergeSpendDay = parent.eq(0).text();
	var avergeSpend = parent.eq(1).text();
	var travelSpendday = parent.eq(2).text();
	var townAvergeSpend = parent.eq(3).text();
	var livePeople = parent.eq(4).text();
	var dayTravlePeople = parent.eq(5).text();
	var url = 'http://192.168.1.102:8080/Statistic/FileUpload/gfCorfficientmath';
	var json = '{';
	json += 'yearAvergeSpendDay: ' + yearAvergeSpendDay;
	json += ',avergeSpend: ' + avergeSpend;
	json += ',travelSpendday: ' + travelSpendday;
	json += ',townAvergeSpend: ' + townAvergeSpend;
	json += ',livePeople: ' + livePeople;
	json += ',dayTravlePeople: ' + dayTravlePeople;
	json += '}';

	$.ajax({
		url: url,
		type: "post",
		dataType: "json",
		data: json,
		cache: false,
		async: true,
		contentType: "application/json; charset=utf-8",
		success: function(data) {
			$(".tip img").attr("src", "");
			$(".tip p").text("上传成功");
			setTimeout(function() {
				closeTip();
			}, 3000);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			failure("上传失败");
		}
	});

}

//TODO:保存
function save() {

}

//TODO:加载无内容,添加数据
function addData() {
	$(".table-div table").css("display", "block");
	$(".table-div table").css("display");
	$(".table-div table").css("opacity", "1");
	var code = '';
	code += '<tr>';
	code += '<td contentEditable="true">' + 1 + '</td>';
	code += '<td contentEditable="true">' + 2 + '</td>';
	code += '<td contentEditable="true">' + 3 + '</td>';
	code += '<td contentEditable="true">' + 4 + '</td>';
	code += '<td contentEditable="true">' + 5 + '</td>';
	code += '<td contentEditable="true">' + 6 + '</td>';
	code += '<td contentEditable="true">' + 7 + '</td>';
	code += '<td contentEditable="true">' + 8 + '</td>';
	code += '</tr> ';
	$(".body table tbody").append(code);
	resize();
	showUploadBt();
}