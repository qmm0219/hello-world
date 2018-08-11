<template>
    <!--打印目标区域的内容-->
    <div class="print_wrap">
        <table class="print_table" id="tableId">
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
            <tr class="alt">
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

}
.print_table{
  font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
  width:100%;
  border-collapse:collapse;
}
.print_table td, .print_table th
{
  font-size:1em;
  border:1px solid #98bf21;
  padding:3px 7px 2px 7px;
}

.print_table th
{
  font-size:1.1em;
  text-align:left;
  padding-top:5px;
  padding-bottom:4px;
  background-color:#A7C942;
  color:#ffffff;
}

.print_table tr.alt td
{
  color:#000000;
  background-color:#EAF2D3;
}
</style>
