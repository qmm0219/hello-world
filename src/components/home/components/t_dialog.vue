<template>
  <el-dialog :visible.sync="currentShow"></el-dialog>
</template>

<script>
    export default {
        name: "dialog",
        props:["show"],
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        computed:{
            currentShow:{
              get(){
                return this.show
              },
              set(val){
                this.$emit("update:show",val)
              }
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
