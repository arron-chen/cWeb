<template>
    <div class="content">
      <eheader></eheader>
      <ebanner></ebanner>
      <div class="main">
        <div class="main-left">
          <ul>
            <li v-for="(item, index) in cards">{{item.title}}</li>
          </ul>
        </div>
        <div class="main-right">b</div>
      </div>
      <efooter></efooter>
    </div>
</template>
<script>
  import response from '@/components/common/response'

  import eheader from '@/components/common/header'
  import efooter from '@/components/common/footer'

  import ebanner from "@/components/index/banner"

  export default {
    data(){
      return {
       cards:[
         {"id":1,"title":"","outline":"","createtime":"","category":""},
         {"id":2,"title":"","outline":"","createtime":"","category":""},
         {"id":3,"title":"","outline":"","createtime":"","category":""},
         {"id":4,"title":"","outline":"","createtime":"","category":""},
         {"id":5,"title":"","outline":"","createtime":"","category":""},

       ]
      }
    },
    components:{response,eheader,efooter,ebanner},
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
  @commonwidth:1100px;
.content{
  width:100%;height:auto;
  .main{
    display: flex;
    justify-content: space-between;
    width:@commonwidth;
    margin:0 auto;
    position:absolute;
    top:60px;
    left:0;right:0;
    bottom:30px;
    .main-left{
      width:70%;
    }
    .main-right{
      width:30%;
    }
  }
}
</style>
