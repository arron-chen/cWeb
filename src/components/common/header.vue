<template>
    <header class="header">
      <div class="header-left"><div>Hi,Mr.chen</div></div>
      <ul class="header-right" >
        <li v-for="(item,index) in menuLists"  :key="index" @click="routerPush(item.url)">{{item.text}}</li>
      </ul>
      <div  v-show="isShow" class="category" @click="handleClickCategory"><i></i></div>
      <ul class="mobile-ul" v-show="isShowMobile">
        <li v-for="(item,index) in menuLists"  :key="index" @click="routerPush(item.url)">{{item.text}}</li>
      </ul>
    </header>
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data(){
     return {
       isShow: false,
       isShowMobile: false
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
      },
      handleClickCategory() {
        this.isShowMobile = !this.isShowMobile
      }
    },

  }
</script>
<style scoped lang="less">
  @commonwidth:70rem;
  .header{
    width: @commonwidth;
    margin: 0 auto;
    height:50px;
    line-height:50px;
    display: flex;
    justify-content: space-between;
    background: radial-gradient(circle,#666,#000);
    position:relative;
    .header-left{
      line-height: 50px;
      div {
        padding-left:20px;
        color:#fff;
      }
      img{
        width:30px;
        height:30px;
      }
    }
    .header-right {
      height:50px;
      list-style:none;
      margin:0;
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
    .category {
      position:relative;
      box-sizing:border-box;
      width: 50px;
      height: 50px;
      line-height: 50px;
      padding:15px;
      i {
        width: 22px;
        height:2px;
        background: #fff;
        color:#fff;
        display: block;
      }
      &::before {
        content: " ";
        width: 22px;
        height:2px;
        background: #fff;
        color:#fff;
        position:absolute;
        top: 22px;

      }
      &::after {
        content: " ";
        width: 22px;
        height:2px;
        background: #fff;
        color:#fff;
        position:absolute;
        top: 30px;

      }
    }
    .mobile-ul {
      position: absolute;
      top: 50px;
      list-style: none;
      margin:0;
      padding:0;
      width: 100%;
      height: auto;
      background: rgba(0,0,0,.8);
      text-align: center;
      z-index:10000;
      li {
        width: 100%;
        padding: 0;
        font-size: 17px;
        color:#fff;

      }
    }
  }
</style>
