$(document).ready(function() {
	$("body").css("opacity", "1");
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
			failure("无内容,请上传");
			showUploadBt();
		}
	});
}

//显示提示框
function showTipBox() {
	$(".tip").css("display", "block");
	$(".tip").css("display");
	$(".tip").css("opacity", "1");
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
	loading("正在上传...");
	var url = 'http://192.168.1.102:8080/Statistic/FileUpload/centralTaxUpload';
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

//TODO:下载
function download() {

}