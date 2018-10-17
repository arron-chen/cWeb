<template>
    <header class="header">
      <div class="header-left"><img src="../../../static/images/icon_card.png"></div>
      <ul class="header-right">
        <li v-for="(item,index) in menuLists" @click="routerPush(item.url)">{{item.text}}</li>
      </ul>
    </header>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
     return {
     }
    },
    computed:{
      ...mapState(['menuLists'])
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
  @commonwidth:110rem;
  .header{
    width: @commonwidth;
    margin: 0 auto;
    height:6rem;
    line-height:6rem;
    display: flex;
    justify-content: space-between;
    background: radial-gradient(circle,#666,#000);
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
