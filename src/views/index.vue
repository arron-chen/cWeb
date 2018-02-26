<template>
    <response>
      <div slot="sm">
          <div class="sider">
            <transition name="fade"   v-on:enter="Enter"  v-on:leave="Leave">
              <div class="siderbar" ref="siderbar" v-show="myVisible">
                <ul class="sider-menu" v-for="(item,index) in list" :key="item.id">
                  <li @click="routerPush(item.route)">{{item.text}}</li>
                </ul>
              </div>
            </transition>
            <div class='menuCover' @click='toggleMenu'  v-show="myVisible"></div>
            <div class="main">
              <div class="siderIcon"><i class="siderIconImg" @click="toggleShow"></i></div>
            </div>
          </div>
      </div>
      <div slot="lg">22222</div>
    </response>
</template>
<script>
  import response from '@/components/response'

  export default {
    data(){
      return {
        myVisible: false,
        list:[
          {
            "id":1,
            "text":'首页',
            "route":'/index'
          },
          {
            "id":2,
            "text":'文章页',
            "route":'/article'
          },
          {
            "id":3,
            "text":'作品集',
            "route":'/work'
          },
          {
            "id":4,
            "text":'关于我们',
            "route":'/about'
          },
          {
            "id":5,
            "text":'联系我们',
            "route":'/contact'
          },
        ]
      }
    },
    components:{response},
    methods:{
      toggleMenu:function () {
        this.myVisible=!this.myVisible;
      },
      toggleShow:function () {
          this.myVisible=!this.myVisible;
      },
      routerPush:function (ro) {
          console.log(ro);
      },
      Enter:function (el) {
        this.$refs.siderbar.style.left =0+'px';
      },
      Leave:function (el) {
        this.$refs.siderbar.style.left =-180+'px';
      },


    },
  }
</script>
<style scoped lang="less">
  @media screen and (max-width:768px){
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .fade-enter-active {
      transition: all .5s ease;
    }
    .fade-leave-active {
      transition: all .5s ease;
    }
    .fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(-180px);
      opacity: 0;
    }
    .sider{
      width:100%;
      height:100%;
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
      background: url('../assets/images/siderbar.png')no-repeat ;
    }
  }
  @media screen and (min-width:768px){
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
      background: url('../assets/images/siderbar.png')no-repeat ;
    }

  }



</style>
