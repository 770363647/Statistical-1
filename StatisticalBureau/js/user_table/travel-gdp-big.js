$(document).ready(function() {
	$("body").css("opacity", "1");
	init();
	getContent();
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

//TODO：获取表格内容
function getContent() {
	loading("正在加载...");
	var code = '';
	var url = 'http://192.168.1.102:8080/Statistic/IntegratedQuery/largeGdpContributeSearch';
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
				code += '<td contentEditable="true">' + '</td>';
				code += '</tr> ';

				$(".body table tbody").append(code);
			}
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
	var url = '';
	$(".upload-input").change(function() {
		url = $(".upload-input").val();
	});

}

//TODO:保存
function save() {

}

//TODO:加载无内容,添加数据
function addData() {
	showUploadBt();
}