<template>
  <div class="nav_container">
    <ul class="nav_ul">
      <li :class="{'active':navIndex == index}" v-for="(item,index) in navList" :key="item.path" @click="navChange(index)">
        <router-link :to="item.path">{{item.pathName}}</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "mainNav",
        data() {
            return {
              navIndex:0,
              navList:[
                {path:"/home",pathName:"首页"},
                {path:"/tab",pathName:"tab"},
                {path:"/demo",pathName:"demo"},
                {path:"/detail",pathName:"详细"},
                {path:"/qrCode",pathName:"二维码"},
                {path:"/my",pathName:"我的"}

              ]
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
          //    导航切换
          navChange(index){
            this.navIndex = index;
          }
        }
    }
</script>

<style scoped lang="less">
.nav_ul{
  width:100%;
  background: #545c64;
  display: flex;
  justify-content: space-around;
  li{
    flex: 1;
    height:40px;
    line-height:40px;
    text-align: center;
    a{
      display: block;
      width:100%;
      height:100%;
      color:#fff;
      text-decoration: none;
    }
  }
  .active{
    background: #ffffff;
    a{
      text-decoration: none;
      color:#666;
    }
    color:#666;
  }

}
</style>
