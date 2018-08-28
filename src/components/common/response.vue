<template>
    <div class="response">
      <template v-if="Dwidth < 768">
        <slot name="mb"></slot>
      </template>
      <template v-else="Dwidth < 1080">
        <slot name="pc"></slot>
      </template>
    </div>
</template>
<script>
  export default {
    name: 'response',
    props: {
    },
    data () {
      return {
        width:''
      }
    },
    mounted () {
      this.width= document.body.offsetWidth;
      window.addEventListener('resize',() => {
        //console.log(document.body.offsetWidth)
        this.width = document.body.offsetWidth;
      })
    },
    computed:{
      Dwidth:function () {
        return this.width;
      }
    },
    methods: {

    }
  }
</script>
<style lang="less" scoped>
  .response{
    width:100%;height:100%;
  }
</style>
