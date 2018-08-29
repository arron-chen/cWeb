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
         {"id":1,"title":"es6语法概要","outline":"","createtime":"","category":""},
         {"id":2,"title":"javascript高级编程","outline":"","createtime":"","category":""},
         {"id":3,"title":"高级程序设计12","outline":"","createtime":"","category":""},
         {"id":4,"title":"前端开发工具优选","outline":"","createtime":"","category":""},
         {"id":5,"title":"程序员男颜知己","outline":"","createtime":"","category":""},

       ]
      }
    },
    mounted(){
      this.$http.post('/news').then((res)=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      });
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
    .main-left{
      width:70%;
      padding:20px 0 0 0;
      ul{
        li{
          width:100%;
          height:180px;
          background-color: rgba(255,255,255,.5);
          margin:0 0 20px 0;
        }
      }
    }
    .main-right{
      width:30%;
      padding:20px;
    }
  }
}
</style>
