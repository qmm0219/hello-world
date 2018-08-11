<template>
    <!--打印目标区域的内容-->
    <div class="print_wrap">
        <table class="print_table">
          <thead>
            <tr>
              <th>商品</th>
              <th>价格</th>
              <th>数量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>苹果</td>
              <td>5.00</td>
              <td>50个</td>
            </tr>
            <tr>
              <td>香蕉</td>
              <td>5.00</td>
              <td>50个</td>
            </tr>
            <tr>
              <td>橘子</td>
              <td>5.00</td>
              <td>50个</td>
            </tr>
            <tr>
              <td>芒果</td>
              <td>5.00</td>
              <td>50个</td>
            </tr>
          </tbody>

        </table>
    </div>
</template>

<script>
    export default {
        name: "printCintent",
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
.print_wrap{
  width:100%;
  height:100%;
  .print_table{
    width:100%;

  }
}
</style>
