<template>
    <footer class="footer">
      <ul>
        <li>
          <a href="#">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.zhihu.com/people/arronpro/">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-stack-1x fa-inverse">知</i>
            </span>
          </a>
        </li>
        <li>
          <a href="http://weibo.com/arronpro">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-weibo fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/arron-chen">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
      <span >&copy;2017-2018 copyright all reservered  </span>
    </footer>
</template>
<script>
  export default {

  }
</script>
<style lang="less" scoped>
  .footer{
    text-align: center;
    background: rgba(255,255,255,.1);
    padding-bottom:20px;
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
