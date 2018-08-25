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
  @commonwidth:980px;
  .header{
    height:50px;
    line-height:50px;
    display: flex;
    justify-items: center;
    ul {
      width:@commonwidth;
      margin:0 auto;
      height:50px;
      list-style:none;
      background: rgba(0,0,0,.7);
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
