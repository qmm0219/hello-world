<template>
  <el-dialog title="弹窗" :visible.sync="$store.state.show"></el-dialog>


</template>

<script>
    export default {
        name: "t_dialog",
        // props:["show"],
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        computed:{
            // currentShow:{
            //   get(){
            //     return this.show
            //   },
            //   set(val){
            //     this.$emit("update:show",val)
            //   }
            // }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
