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
  @media screen  and (max-width:600px){
    .header {display: none !important;}
    .footer {display: none !important;}
    .main-right{display: none}
    .main-left{
      width:100% !important;
    }
    body {font-size:12px!important;}
  }
  @media screen and (min-width:600px) and (max-width:900px){
    body {font-size:12px!important;}
  }
  @media screen and (min-width:900px) {
    body {font-size:14px!important;}
  }
  html,body{
    width:100%;height:100%;
  }

  body{
    background-color: #f2f2f2;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;height:100%;
}
</style>
