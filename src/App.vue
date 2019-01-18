<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /**{
    margin:0;padding:0;
  }*/
  @media screen and (max-width:850px){
    .content  .header{
      width: 100vw !important;
    }
    .content .header .header-right {
      display: none !important;
    }
    .content .header .category {
      display: block !important;
    }
    .content .footer {
      width: 100vw !important;
      height: 10vh !important;
    }
    .main {
      width:100vw !important;
    }
    .main-right{display: none}
    .main-left{
      width:100vw !important;
    }
    .main-left ul {
      width:100vw !important;
      overflow: hidden;
    }
    .content .main .main-left ul li .item-img img {
      width: 30vw !important;
      height: 8rem !important; 
    }
    html {font-size:13px!important;}
  }
  @media screen and (min-width:800px) and (max-width:900px){
    html {font-size:14px!important;}
  }
  @media screen and (min-width:900px) {
    html{font-size:16px!important;}
  }
  html,body{
    width:100%;height:100%;
  }

  body{
    background-color: #f2f2f2;
    -webkit-overflow-scrolling:touch;
    overflow-scrolling:touch;
    overflow-y:scroll;
    overflow-x:hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;height:100%;
}
</style>
