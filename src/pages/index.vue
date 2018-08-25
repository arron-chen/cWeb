<template>
    <response>
      <div slot="mb" class="mb">
          <div class="sider">
            <esiderbar :myVisible="myVisible"  v-on:listenView="changeView" :list="list"></esiderbar>
            <div class='menuCover' @click='toggleMenu'  v-show="myVisible"></div>
            <div class="main">
              <div class="siderIcon"><i class="siderIconImg" @click="toggleShow"></i></div>
              <router-view></router-view>
            </div>
          </div>
      </div>
      <div slot="pc" class="pc">
        <eheader :list="list" class="eheader"></eheader>
        <router-view></router-view>
        <efooter class="efooter"></efooter>
      </div>
    </response>
</template>
<script>
  import "../assets/css/normalize.css";
  import response from '@/components/response'

  import eheader from '@/components/header'
  import efooter from '@/components/footer'

  import esiderbar from '@/components/siderbar'

  export default {
    data(){
      return {
        myVisible: false,
        list:[
          {
            "id":1,
            "text":'首页',
            "route":'/'
          },
          {
            "id":2,
            "text":'关于',
            "route":'/list'
          },
          {
            "id":3,
            "text":'笔记',
            "route":'/work'
          },
          {
            "id":4,
            "text":'魔方',
            "route":'/about'
          },
          {
            "id":5,
            "text":'留言板',
            "route":'/contact'
          },
        ]
      }
    },
    components:{response,eheader,efooter,esiderbar},
    methods:{
      toggleMenu:function () {
        this.myVisible=!this.myVisible;
      },
      toggleShow:function () {
          this.myVisible=!this.myVisible;
      },
      routerPush:function (ro) {
        this.$router.push({path:ro});
      },
      changeView:function () {
        this.myVisible=!this.myVisible;
      }



    },
  }
</script>
<style scoped lang="less">
  @media screen and (max-width:768px){
    .mb{
      width:100%;height:100%
    }
    .sider{
      width:100%;
      height:100%;
      z-index:2;
    }
    .menuCover{
      position:absolute;
      top:0;bottom:0;
      left:0;right:0;
      background: rgba(0,0,0,.1);
      z-index:3;
    }
    .main{
      position:absolute;
      top:0;bottom:0;
      left:0;right:0;
      z-index:1;
    }
    .siderIcon{
      width:25px;
      height:25px;
      position:absolute;
      top:2px;left:5px;
    }
    .siderIconImg{
      width:100%;
      height:100%;
      display: inline-block;
      //background: url('../assets/images/siderbar.png')no-repeat ;
    }
  }
  @media screen and (min-width:768px){
    .pc{
      width:100%;height:100%
    }
    .efooter{
      position:absolute;
      bottom:0;
      left:0;right:0;
    }
    .sider{
      width:100%;
      height:80px;
      z-index:2;
    }
    .siderbar{
      position:absolute;
      top:0;bottom:0;
      width:180px;
      left:0;
      background-color: #2c3e50;
      z-index:4;
      .sider-menu{
        position: relative;
        list-style:none;
        font-size:14px;
        li{
          color:#ffffff;
        }
        li:hover{
          color:#42b983;
          cursor: pointer;
        }
      }
    }
    .menuCover{
      position:absolute;
      top:0;bottom:0;
      left:0;right:0;
      background: rgba(0,0,0,.1);
      z-index:3;
    }
    .main{
      position:absolute;
      top:0;bottom:0;
      left:0;right:0;
      z-index:1;
    }
    .siderIcon{
      width:25px;
      height:25px;
      position:absolute;
      top:2px;left:5px;
    }
    .siderIconImg{
      width:100%;
      height:100%;
      display: inline-block;
      //background: url('../assets/images/siderbar.png')no-repeat ;
    }
  }

</style>
