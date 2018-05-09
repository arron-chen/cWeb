<template>
    <header class="header" ref="siderbar" >
      <ul class="commonWidth">
        <li v-for="(item,index) in list" :key="item.id" @click="routerPush(item.route)">{{item.text}}</li>
      </ul>
    </header>
</template>
<script>
  export default{
    data(){
     return {

     }
    },
    props:{
      list:{},
    },
    methods:{
      routerPush:function (ro) {
        console.log(ro);
        this.$router.push({path:ro});
      }
    },

  }
</script>
<style scoped lang="less">
  .header{
    height:50px;
    line-height:50px;
    margin:0;
    background: rgba(0,0,0,.7);

    ul {
      width:1000px;
      margin:0 auto;
      height:50px;
      list-style:none;
      li{
        color: #fffdfb;
        float:left;
        cursor:pointer;
        padding:0 10px;
      }
      li:hover{
        background-color: #a0b991;
      }
    }
  }
</style>
