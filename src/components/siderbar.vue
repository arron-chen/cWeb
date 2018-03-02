<template>
  <transition name="fade"   v-on:enter="Enter"  v-on:leave="Leave">
  <div class="siderbar" ref="siderbar" v-show="myVisible">
    <ul class="sider-menu" >
      <li v-for="(item,index) in list" :key="item.id"  @click="routerPush(item.route)">{{item.text}}</li>
    </ul>
  </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:{
      myVisible:false,
      list:{}
    },
    computed:{
      svisible:{
        get(){
          return this.myVisible;
        },
        /*set(val){
          this.val=!val;
        }*/
      }
    },
    methods:{
      routerPush:function (ro) {
        this.$router.push({path:ro});
        this.$emit('listenView',this.svisible);
        //console.log(this.svisible)
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
  .siderbar{
    position:absolute;
    top:0;bottom:0;
    width:180px;
    left:0;
    background: rgba(44,62,80,1);
    z-index:4;
  .sider-menu{
    position: relative;
    list-style:none;
    font-size:14px;
    padding-top:10px;
  li{
    color:#ffffff;
    padding:6px 20px;
  }
  li:hover{
    color:#42b983;
    cursor: pointer;
  }
  }
  }
</style>
