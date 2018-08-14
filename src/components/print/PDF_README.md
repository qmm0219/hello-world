###Welcome to use MarkDown
功能：Vue导出页面为PDF格式
通过网上的查阅以后,说一下思路.就是将页面转换成图片格式.然后通过图片的base64码.生成PDF..,具体实现如下：
##第一种：定义全局函数
1 、我们要添加两个模块
	第一个.将页面html转换成图片
	npm install --save html2canvas 
	第二个.将图片生成pdf
	npm install jspdf --save

2、定义全局函数..创建一个htmlToPdf.js文件在指定位置.我个人习惯放在('src/assets/js/htmlToPdf')
htmlToPdf.js文件的内容为：
	// 导出页面为PDF格式
	import html2Canvas from 'html2canvas'
	import JsPDF from 'jspdf'
	export default{
	  install (Vue, options) {
	    Vue.prototype.getPdf = function () {
	      var title = this.htmlTitle
	      html2Canvas(document.querySelector('#pdfDom'), {
	        allowTaint: true
	      }).then(function (canvas) {
	        let contentWidth = canvas.width
	        let contentHeight = canvas.height
	        let pageHeight = contentWidth / 592.28 * 841.89
	        let leftHeight = contentHeight
	        let position = 0
	        let imgWidth = 595.28
	        let imgHeight = 592.28 / contentWidth * contentHeight
	        let pageData = canvas.toDataURL('image/jpeg', 1.0)
	        let PDF = new JsPDF('', 'pt', 'a4')
	        if (leftHeight < pageHeight) {
	          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
	        } else {
	          while (leftHeight > 0) {
	            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
	            leftHeight -= pageHeight
	            position -= 841.89
	            if (leftHeight > 0) {
	              PDF.addPage()
	            }
	          }
	        }
	        PDF.save(title + '.pdf')
	      }
	      )
	    }
	  }
	}


3、在main.js中使用我们定义的函数文件。
	import htmlToPdf from '@/components/utils/htmlToPdf'
	Vue.use(htmlToPdf)


4、在需要的导出的页面..调用我们的getPdf方法即可.
html部分：
	<template>
		<div>
			<div class="row" id="pdfDom" style="padding-top: 55px;background-color:#fff;">
				//给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
			</div>
			<button type="button" class="btn btn-primary"v-on:click="getPdf()">导出PDF</button>
		</div>
	</template>
js部分：
	export default {
	  	data () {
	      	return {
	      		htmlTitle: '页面导出PDF文件名'
	      	}
	  	}
	 }
	


##第二种：局部引入
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

