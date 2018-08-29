<template>
    <div class="content">
      <eheader></eheader>
      <ebanner></ebanner>
      <div class="main">
        <div class="main-left">
          <ul>
            <li v-for="(item, index) in cards" :key="item.id">
              <div class="item-img"> <img :src="item.thumbnail_pic"></div>
              <div class="item-cont">
                <div class="item-cont-title">{{item.title}}</div>
                <div class="item-cont-outline">{{item.outline}}</div>
                <div class="item-cont-tool">{{item.date}}</div>
              </div>
            </li>
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
       cards:[]
      }
    },
    created(){},
    mounted(){
      this.$http.post('/news').then((res)=>{
        this.cards = res.data.cards;
        console.log(res);
      }).catch((e)=>{
        console.log(e)
      });
    },
    filters: {

    },
    components:{response,eheader,efooter,ebanner},
    computed:{

    },
    methods:{

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
          height:220px;
          background-color: rgba(255,255,255,.5);
          margin:0 0 20px 0;
          display: flex;
          justify-content: space-between;
          border-radius:3px;
          box-shadow: 5px 10px 10px rgba(0,0,0,.1);
          .item-img{
            padding:20px 0 20px 20px;
            img{
              width:270px;
              height:180px;
            }
          }
          .item-cont{
            padding:20px;
            flex:1;
            display: flex;
            flex-direction: column;
            .item-cont-title{
              font-weight: bold;
              font-size:16px;
              height:30px;
              line-height: 30px;
              border-bottom:2px solid #efefef;
              overflow: hidden;

            }
            .item-cont-outline{
              flex: 1;
              overflow: hidden;
            }
            .item-cont-tool{
              height:30px;
            }
          }
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
