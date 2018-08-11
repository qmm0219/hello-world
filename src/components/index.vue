<template>
<div class="index_wrap">
  <div class="top_nav">
    <main-nav ref="mainNav"></main-nav>
  </div>
  <div class="view">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
    import MainNav from "./nav/mainNav"
    export default {
        name: "index",
        data() {
            return {}
        },
        components:{
          "main-nav":MainNav
        },
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang="less">
  .index_wrap{
    width:100%;
    height:100%;
    .top_nav{
      height:40px;

    }
    .view{
      height:calc(100% - 45px);
      padding:10px;
      box-sizing: border-box;
      border:1px solid #ccc;
    }

  }

</style>
