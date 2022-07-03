<template>
    <div class="index" id="index"></div>
</template>
<script>
import Game from '@/class/pixi'
import '../css/index.less'
export default {
    methods: {
        init() {
            const config = {
                width: window.innerWidth,
                height: window.innerHeight,
                name:'index'
            }
            const game = new Game(config)
        }
    },
   mounted() {
        this.init()
    }
}
</script>
