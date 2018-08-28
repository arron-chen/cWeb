<template>
    <header class="header">
      <div class="header-left"><img src="../../../static/images/icon_card.png"></div>
      <ul class="header-right">
        <li v-for="(item,index) in lists" @click="routerPush(item.url)">{{item.text}}</li>
      </ul>
    </header>
</template>
<script>
  export default{
    data(){
     return {
       lists:[
         {"id":1,"text":"首页","url":"/"},
         {"id":2,"text":"笔记","url":"/note"},
         {"id":3,"text":"魔方","url":"/cube"},
         {"id":4,"text":"留言板","url":"/board"},
         {"id":5,"text":"关于","url":"/about"},
         ]
     }
    },
    props:{
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
  @commonwidth:1100px;
  .header{
    width: @commonwidth;
    margin: 0 auto;
    height:60px;
    line-height:60px;
    display: flex;
    justify-content: space-between;
    background: rgba(0,0,0,.7);
    .header-left{
      line-height: 50px;
      img{
        width:30px;
        height:30px;
      }
    }
    ul {
      height:50px;
      list-style:none;
      li{
        color: #fffdfb;
        float:left;
        cursor:pointer;
        padding:0 20px;
      }
      li:hover{
        background-color: #a0b991;
      }
    }
  }
</style>
