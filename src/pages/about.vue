<template>
    <div class="about">
      <section>
        <div class="banner">
          <h3>About</h3>
          <p>hey,this is arron</p>
        </div>
        <div class="">

        </div>
      </section>
      <efooter class="footer">
      </efooter>
    </div>
</template>
<script>
  import efooter from '@/components/footer'
  export default {
    data(){
      return {
        msg:'jh'
      }
    },
    components:{efooter}

  }
</script>
<style scoped lang="less">
  @media screen and (max-width:768px){
    .banner{
      position:absolute;
      height:250px;
      top:0;
      left:0;right:0;
      z-index:-1;
      text-align: center;
      color:#fff;
      background: url('../assets/images/logo.png') no-repeat center rgba(0,0,0,.1);
      h3{
        font-size:3em;
        font-family:'sans-serif';
        margin-top:100px;
      }
      p{
        font-size:1.2em;
      }
    }
    .footer{
      position:absolute;
      left:0;right:0;bottom:0;
    }
  }
  @media screen and (min-width:768px){
    .banner{
      position:absolute;
      height:250px;
      top:50px;
      left:0;right:0;
      z-index:-1;
      text-align: center;
      color:#fff;
      background: url('../assets/images/logo.png') no-repeat center rgba(0,0,0,.1);
      h3{
        font-size:3em;
        font-family:'sans-serif';
        margin-top:100px;
      }
      p{
        font-size:1.2em;
      }
    }
    .footer{
      display: none;
    }
  }
</style>
