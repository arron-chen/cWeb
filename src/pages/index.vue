<template>
    <div class="content">
      <eheader></eheader>
      <ebanner></ebanner>
      <div class="main">
        <div class="main-left">
          <ul>
            <li v-for="(item, index) in articles" :key="item.id">
              <div class="item-img"> <img :src="item.thumbnail_pic"></div>
              <div class="item-cont">
                <div class="item-cont-title">{{item.title}}</div>
                <div class="item-cont-outline">{{item.outline}}</div>
                <div class="item-cont-tool">{{item.date}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="main-right">
          <div class="right-search">
            <input placeholder="输入搜索内容">
            <button>搜索</button>
          </div>
          <div class="right-hot">
            <h3>热门文章</h3>
            <ul>
              <li v-for="(item,index) in hots">
                <img :src="item.thumbnail_pic">
                <div class="right-hot-cont">
                  <h3>{{item.title}}</h3>
                  <div>{{item.date}}</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="right-tag">
            <h3>云标签</h3>
            <ul>
              <li v-for="(item,index) in tags" :style="{background:item.color}"><label>{{item.label}}</label><i>({{item.number}})</i></li>
            </ul>
          </div>
        </div>
      </div>
      <efooter></efooter>
    </div>
</template>
<script>
  import response from '@/components/common/response'

  import eheader from '@/components/common/header'
  import efooter from '@/components/common/footer'

  import ebanner from "@/components/index/banner"

  import {mapState} from 'vuex'
  export default {
    data(){
      return {}
    },
    created(){},
    mounted(){
      this.$store.dispatch('getCacheAll')
    },
    filters: {},
    components:{response,eheader,efooter,ebanner},
    computed:{
      ...mapState(['articles','hots','tags'])
    },
    methods:{

    },
  }
</script>
<style scoped lang="less">
  @commonwidth:70rem;
.content{
  width:100%;height:auto;
  .main{
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    width:@commonwidth;

    .main-left{
      width:70%;
      padding:20px 0 0 0;
      ul{
        margin-top:0;
        padding:0;
        li{
          width:100%;
          height:12rem;
          background-color: rgba(255,255,255,.5);
          margin:0 0 20px 0;
          display: flex;
          justify-content: space-between;
          border-radius:3px;
          box-shadow: 5px 10px 10px rgba(0,0,0,.1);

          .item-img{
            padding:20px 0 20px 20px;
            img{
              width:18rem;
              height:10rem;
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
      padding:20px 0 20px 20px;
      .right-search{
        position: relative;
        padding:0 0 10px 0;
        display: flex;
        justify-content: space-between;
        input{
          height:30px;
          width: 80%;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border:none;
          outline: none;
          text-indent: 10px;
          box-sizing:border-box;
        }
        button{
          width:20%;
          height:30px;
          border:none;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-left-width: 1px;
          border-left-color: #efefef;
          border-left-style:solid;
          outline: none;
          &:hover {
            box-shadow: 5px 3px 8px rgba(0,0,0,.3);
            cursor: pointer;
          }
        }
      }
      .right-hot{
        padding: 0 5px 0 5px;
        background: rgba(255,255,255,.5);
        box-shadow: 1px 2px 6px rgba(63,74,105,.16);

        h3{
          font-weight: bold;
          font-size:16px;
          border-bottom:1px solid #efefef;
          padding:10px 0 0 10px;
        }
        ul{
          padding: 5px 10px;
          border-radius: 3px;
          margin-bottom:20px;
          li{
            display: flex;
            justify-content: space-between;
            padding:15px 0;
            border-bottom:1px dashed #efefef;
            &:last-child{
              border-bottom:none;
            }
            .right-hot-cont{
             width:100%;
              padding:0 10px;
              h3{
                border:none;
                font-size: 14px;
              }
            }

          }
        }

      }
      .right-tag{
        padding: 0 5px 0 5px;
        background: rgba(255,255,255,.5);
        h3{
          font-weight: bold;
          font-size:16px;
          width:100%;
          border-bottom:1px solid #efefef;
          padding:10px 0 10px 10px;
        }
        ul{
          li{
            display: inline-block;
            border-radius: 0% 50%;
            margin:5px ;
            padding:3px 15px;
            background: #42b983;
            color:#ffffff;
            label{}
          }
        }
      }
    }
  }
}
</style>
