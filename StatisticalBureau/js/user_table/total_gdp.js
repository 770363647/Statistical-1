$(document).ready(function() {
	$("body").css("opacity", "1");
	init();
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
	loading("正在加载...");
	var url = 'http://192.168.1.102:8080/Statistic/BaseQuery/gdpUpload';
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
			//加载成功
			loadSuccess();
			$.each(data, function(i, n) {

				//遍历数据生成表格
				code += '<tr>';
				code += '<td contentEditable="true">' + 1 + '</td>';
				code += '<td contentEditable="true">' + 2 + '</td>';
				code += '<td contentEditable="true">' + 3 + '</td>';
				code += '</tr> ';

			});
			$(".body table tbody").append(code);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			failure("无内容,请上传");
			addData();
		}
	});
}

//TODO:上传
function upload() {
	//触发文件选择框
	$(".upload-input").trigger("click");
	//获取文件路径
	var fileUrl = '';
	$(".upload-input").change(function() {
		fileUrl = $(".upload-input").val();
		startUpload(fileUrl);
	});

}
//开始上传
function startUpload(fileUrl) {
	var url = 'http://192.168.1.102:8080/Statistic/FileUpload/gdpUpload';
	var json = '';

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

			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {

		}
	});
}

//TODO:保存
function save() {

}
//TODO:加载无内容,添加数据
function addData() {
	showUploadBt();
}