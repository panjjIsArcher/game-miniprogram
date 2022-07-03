<template>
    <div class="index" id="index"></div>
</template>
<script>
import Game from '@/class/pixi'
import '../css/index.less'
export default {
    data() {
        return {
            game: null,
            tips:
                `在『母体』中，你所见的\n一切都不是真实

选择蓝色药丸，明天早上你会\n在你的床上醒来，继续你的生活

选择红色药丸，我会带你去看\n这个世界的真相`
        }
    },
    methods: {
        // 初始化
        init() {
            const config = {
                width: window.innerWidth,
                height: window.innerHeight,
                name: 'index'
            }
            const game = new Game(config)
            this.game = game
            window.game = game
        },
        text(str) {
            const config = {
                left: 50,
                top: 150,
                stroke: 'rgb(4, 60, 4)',
                fill: ['rgb(4, 60, 4)'],
                fontSize: 20,
                name: 'tips'
            }
            this.game.createText(str, config)
        },
        updateText(tips) {
            let str = ''
            for (let i = 0; i < tips.length; i++) {
                let timeout = setTimeout(() => {
                    let letter = tips[i]
                    str += letter
                    const prev = this.game.game.stage.children.find(e => e.name === 'tips')
                    prev.text = tips[i] ? str + '_' : str
                    if (i >= tips.length) {
                        clearTimeout(timeout)
                    }
                }, 200 * i)
            }
        }
    },
    mounted() {
        this.init()
        // 文字提示
        this.text('_')
        this.updateText(this.tips)
    }
}
</script>
