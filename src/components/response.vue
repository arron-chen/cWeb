<template>
    <div>
      <template v-if="Dwidth < 768">
        <slot name="sm"></slot>
      </template>
      <template v-else="Dwidth < 1080">
        <slot name="lg"></slot>
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
        console.log(document.body.offsetWidth)
        this.width = document.body.offsetWidth;
      })
    },
    computed:{
      Dwidth:function () {
        return this.width
      }
    },
    methods: {

    }
  }
</script>
<style lang="less">

</style>
