<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  created(){


  }

}
</script>

<style>
  @import './assets/css/reset.css';
  @import "assets/css/main.css";
#app {
  width:100%;
  height:100%;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  font-size:14px;
  /*margin-top: 60px;*/
}
</style>
