<template>
  <div class="home_container">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="month"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value2"
        type="month"
        placeholder="选择日期"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>

    <!--1、单个状态存放使用start-->
    <!--<el-button type="primary" @click="$store.state.show = true">点击</el-button>-->
    <!--<t-dialog></t-dialog>-->
    <!--单个状态存放使用end-->


    <!--2、如果我们要进行一个操作 , 需要依赖很多很多个状态,使用mutations-->
    <!--store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：-->
    <!--使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。-->
    <!--<el-button type="primary" @click="$store.commit('switch_dialog')">点击</el-button>-->
    <!--<t-dialog></t-dialog>-->



    <!--3.多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了:-->



  </div>
</template>

<script>
  import Tdialog from "./components/t_dialog"
    export default {
        name: "home",
        data() {
          let that = this;
            return {
              value1: '',
              value2: '',
              pickerOptions0: {
                disabledDate(time) {
                  return time.getTime() > Date.now() - 8.64e7;
                }
              },
              pickerOptions1: {
                disabledDate(time) {
                  return time.getTime() > Date.now() - 8.64e7 ||
                    time.getTime() < new Date(that.value1).getTime();
                }
              },

            }
        },
        components:{
            "t-dialog":Tdialog
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang="less">
  .home_container{
      width:100%;
      height:100%;
  }

</style>
