<template>
	<!--打印目标区域的内容-->
	<div class="print_wrap">
		<div class="header_title">
			<el-button type="primary" @click="printBtn1()">方法一</el-button>
			<el-button type="primary" @click="printBtn2()">方法二</el-button>
			<el-button type="primary" @click="printBtn3()">打印方法三</el-button>
			<el-button type="primary" @click="exportExcel('tableId')">导出excel</el-button>
			<a download="商品价格表" id="excelOut" href="#">table导出Excel</a>
			<el-button type="primary" @click="tableToExcel('tableId','水果价格表')">导出excel2</el-button>

		</div>

		<!--打印区域-->
		<div id="print_content">
			<print-content></print-content>
		</div>

		<!--导出excel-->
		<div class="no-print">
			<h1>表格标题</h1>
			<table cellspacing="0" cellpadding="0" border="1" id="tableToExcel">
				<thead>
					<tr>
						<td style="font-size: 18px">公司一</td>
						<td>公司二一</td>
						<td>公司三</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>A公司</td>
						<td>B公司</td>
						<td>C公司</td>
					</tr>
					<tr>
						<td>A公司</td>
						<td>B公司</td>
						<td>C公司</td>
					</tr>
					<tr>
						<td>A公司</td>
						<td>B公司</td>
						<td>C公司</td>
					</tr>
					<tr>
						<td colspan="3">共计</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import printContent from './printContent'
	import Common from '@/assets/js/common'
	export default {
		name: "printCintent",
		data() {
			return {

			}
		},
		created() {

		},
		mounted() {
			this.$nextTick(function() {
				//this.tableToExcel('tableId', '下载模板')
			})

		},
		components: {
			"print-content": printContent
		},
		methods: {
			//打印方法一：直接使用window.print();
			printBtn1() {
				// （1）首先获得元素的html内容（这里建议如果有样式最好是用内联样式的方式）
				let printContent = document.getElementById('print_content');
				console.log(printContent.innerHTML);
				let newContent = printContent.innerHTML;
				//（2）保存当前页面的整个html，因为window.print()打印操作是打印当前页的所有内容，所以先将当前页面保存起来，之后便于恢复。
				let oldContent = document.body.innerHTML;
				//（3）把当前页面替换为打印内容HTML
				document.body.innerHTML = newContent;
				//（4）执行打印操作
				window.print();
				//（5）还原当前页面
				window.location.reload();
				document.body.innerHTML = oldContent;
				return false;

			},
			//  打印方法二：window.open()
			printBtn2(myDiv) {
				var printHtml = document.getElementById("print_content").innerHTML;

				var wind = window.open("", 'newwindow', 'height=500, width=800, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');

				wind.document.body.innerHTML = printHtml;

				wind.print();
				return false;

				//打印通过url获取的内容
				// var wind = window.open(url,'newwindow', 'height=300, width=700, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');

				// wind.print();
				//对方url返回的所有内容都会被打印，，，如果知道需要打印指定内容的ID，可以先将页面获取到，然后通过一、中的方式打印。
			},
			//打印pdf
			printBtn3() {
				//直接调用打印方法，把不需要打印的内容利用@media only print{}隐藏掉
				//优点：保留原有页面(打印之前页面)的内容
				window.print();
			},
			//后台返回数据导出excel
			exportExcel(tableid) {
				//	      	this.$http.get('/user?ID=12345')
				//						.then(function (response) {
				//							const blob = new Bolb([response],{
				//								type:"application/vnd.ms-excel;charset=utf-8"
				//							});
				//							const fileName = "价格统计表.xlsx";
				//							if("download" in document.createElement("a")){
				//								const ele = document.createElement("a");
				//								ele.download = fileName;
				//								ele.style.display = "none";
				//								ele.href = URL.createObjectURL(blob);
				//								document.body.appendChild(ele);
				//								ele.click();
				//								URL.revokeObjectURL(ele.href);
				//								document.body.removeChild(ele);
				//							}else{
				//								navigator.msSaveBlob(blob,fileName);
				//							}
				//						})
				//						.catch(function (error) {
				//							console.log(error);
				//						});

			},
			tableToExcel(tableid, sheetName) {
				//base64转码
				var base64 = function(s) {
					return window.btoa(unescape(encodeURIComponent(s)));
				};
				//替换table数据和worksheet名字
				var format = function(s, c) {
					return s.replace(/{(\w+)}/g,
						function(m, p) {
							return c[p];
						});
				}
				var uri = 'data:application/vnd.ms-excel;base64,';
				var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"' +
					'xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>' +
					'<x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets>' +
					'</x:ExcelWorkbook></xml><![endif]-->' +
					'<meta charset="UTF-8">' +
					' <style type="text/css">' +
					'table td {' +
					'border: 1px solid #000000;' +
					'width: 200px;' +
					'height: 30px;' +
					' text-align: center;' +
					'background-color: #4f891e;' +
					'color: #ffffff;' +
					' }' +
					'</style>' +
					'</head><body ><table class="excelTable">{table}</table></body></html>';
				if(!tableid.nodeType) tableid = document.getElementById(tableid);
				var ctx = {
					worksheet: sheetName || 'Worksheet',
					table: tableid.innerHTML
				};
				//document.getElementById("excelOut").href = uri + base64(format(template, ctx));
				window.location.href = uri + base64(format(template, ctx));
			},

		}
	}
</script>

<style lang="less">
		@media only print{
			.top_nav{
				display: none;
			}
			.no-print{
				display: none;
			}
		}
	.print_wrap {
		width: 100%;
		height: 100%;
		.header_title {
			width: 100%;
			padding: 10px 15px;
		}
		#excelOut {
			display: inline-block;
			padding: 12px 20px;
			background: #007AFF;
			color: #fff;
			text-decoration: none;
			border-radius: 4px;
			font-size: 14px;
			&:hover {
				background: #3190E8;
			}
		}
	}
</style>