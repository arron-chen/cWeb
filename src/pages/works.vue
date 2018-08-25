<template>
    <section class="work">
        <ul>
          <li><a>官网</a></li>
          <li><a>体验中心</a></li>
        </ul>
    </section>
</template>
<script>
</script>
<style scoped lang="less">
  .work{
    position:absolute;
    left:0;right:0;
    top:50px;
    bottom:90px;
    margin: 0 auto;
    width: 1000px;
    padding-top:40px;
    ul{
      list-style:none;
      li{
        display: inline-block;
        width:120px;
        height:120px;
        float:left;
        border:1px solid #efefef;
        border-radius:5px;
        margin-left:10px;
        box-shadow:1px 2px 5px #efefef;
        text-align: center;
        background: linear-gradient(to bottom right,#f5cb47,#ffee6a);
        a{
          vertical-align: middle;
          font-size:18px;
          font-weight:500;
          position:relative;
          top:45px;
          text-decoration: none;
        }
      }
      li:hover{
        border:1px solid #efefef;
        cursor:pointer;
        box-shadow:2px 3px 10px #efefef;
      }
    }
  }
</style>
