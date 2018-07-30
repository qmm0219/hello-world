<template>
  <div id="query">
    <h1>二维码：</h1>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
    import QRCode from 'qrcode'
    export default {
        name: "qrCode",
        data() {
            return {
              QueryDetail:""
            }
        },
        created() {
        },
        mounted() {
          this.useqrcode()

        },
        methods: {
          //动态生成二维码
          useqrcode(){
            //生成的二维码内容，可以添加变量
            // this.QueryDetail='http://www.kspxzx.com/#/guard'+"?unique_code="+this.QueryDetail;
            this.QueryDetail = 'https://www.baidu.com';
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, this.QueryDetail, function (error) {
              if (error) console.error(error)
              console.log('success!');
            })
          }
        }
    }
</script>

<style scoped>
#query{
  width: 100%;
  height:100%;
}
#canvas{
  width: 200px;
  height:200px;
}
</style>
