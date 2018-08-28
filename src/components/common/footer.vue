<template>
    <footer class="footer">
      <span >&copy;2017-2019 Mr.Chen |<a href="http://www.miitbeian.gov.cn"> 粤ICP备18001531号</a>  </span>
    </footer>
</template>
<script>
  export default {

  }
</script>
<style lang="less" scoped>
  @commonwidth:1100px;
  .footer{
    width: @commonwidth;
    margin:0 auto;
    height:30px;
    text-align: center;
    background: rgba(255,255,255,.1);
    display: flex;
    justify-content: center;
    bottom:0;
    left:0;right:0;
    position: absolute;
    span{
      color:#000;
    }
    ul{
      width:100%;
      height:50px;
      line-height: 50px;
      li{
        padding-right: 5px;
        padding-left: 5px;
        display:inline-block;
        a{
          i:hover{
            background-color: #42b983;
            border-radius:50%;
          }
        }
      }
    }
  }
</style>
