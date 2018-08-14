<template>
	<div>
		<el-button type="primary" @click="getPdf()">导出PDF</el-button>

		<div class="row" id="pdfDom">
			<h2>标题</h2>
			<p>这里是需要打印的内容</p>
		</div>

	</div>

</template>
<style scoped>

</style>
<script>
	import html2Canvas from 'html2canvas'
	import JsPDF from 'jspdf'
	export default {
		data() {
			return {
				htmlTitle: "测试" //这个是pdf文件的名字
			}
		},
		methods: {

			getPdf() {
				var title = this.htmlTitle
				html2Canvas(document.querySelector('#pdfDom'), {
					allowTaint: true
				}).then(function(canvas) {
					let contentWidth = canvas.width
					let contentHeight = canvas.height
					let pageHeight = contentWidth / 592.28 * 841.89
					let leftHeight = contentHeight
					let position = 0
					let imgWidth = 595.28
					let imgHeight = 592.28 / contentWidth * contentHeight
					let pageData = canvas.toDataURL('image/jpeg', 1.0)
					let PDF = new JsPDF('', 'pt', 'a4')
					if(leftHeight < pageHeight) {
						PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
					} else {
						while(leftHeight > 0) {
							PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
							leftHeight -= pageHeight
							position -= 841.89
							if(leftHeight > 0) {
								PDF.addPage()
							}
						}
					}
					PDF.save(title + '.pdf')
				})
			}

		},

	}
</script>