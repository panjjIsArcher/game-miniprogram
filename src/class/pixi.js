import * as PIXI from "pixi.js"
export default class Game {
    constructor(config) {
        const { width, height, name } = config
        const game = new PIXI.Application({width,height})
        const root = document.querySelector(`#${name}`)
        root.appendChild(game.view)
        this.game = game
    }
}