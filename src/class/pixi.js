import * as PIXI from "pixi.js"
export default class Game {
    constructor(config) {
        const { width, height, name } = config
        const game = new PIXI.Application({ width, height })
        const root = document.querySelector(`#${name}`)
        root.appendChild(game.view)
        this.PIXI = PIXI
        this.game = game
    }
    // 创建文本
    createText(str, config) {
        const { left, top } = config
        const style = new this.PIXI.TextStyle({
            fontFamily: 'Arial', // 字体
            fontSize: 20, // 
            fontWeight: 'bold',
            stroke: "#fff",
            wordWrap: true,
            fill: ['#fff'],
            align:'left',
            ...config
        })
        const text = new this.PIXI.Text(str, style)
        text.position.set(left, top)
        text.name = config.name
        this.game.stage.addChild(text)

    }
    createSprite(url){
        const sprite = this.PIXI.Sprite.from(url)
        return sprite
    }
    addAnimation(fn){
        this.game.ticker.add(fn)
    }
}