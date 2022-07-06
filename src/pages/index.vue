<template>
  <div class="index" id="index"></div>
</template>
<script>
import Game from "@/class/pixi";
import "../css/index.less";
const screen = {
  width: window.innerWidth,
  height: window.innerHeight,
};
export default {
  data() {
    return {
      tipStatus: false,
      game: null,
      tips: `在『母体』中，你所见的\n一切都不是真实

选择蓝色药丸，明天早上你会\n在你的床上醒来，继续你的生活

选择红色药丸，我会带你去看\n这个世界的真相`,
    };
  },
  methods: {
    // 初始化
    init() {
      const config = {
        width: window.innerWidth,
        height: window.innerHeight,
        name: "index",
      };
      const game = new Game(config);
      this.pixi = game;
      window.game = game;
    },
    text(str) {
      const config = {
        left: 50,
        top: 150,
        stroke: "rgb(4, 60, 4)",
        fill: ["rgb(4, 60, 4)"],
        fontSize: 20,
        name: "tips",
      };
      this.pixi.createText(str, config);
    },
    updateText(tips) {
      let str = "";
      for (let i = 0; i < tips.length; i++) {
        let timeout = setTimeout(() => {
          let letter = tips[i];
          str += letter;
          const prev = this.pixi.game.stage.children.find(
            (e) => e.name === "tips"
          );
          prev.text = tips[i] ? str + "_" : str;
          console.log(i, tips.length);
          if (i >= tips.length - 1) {
            this.tipStatus = true;
            clearTimeout(timeout);
          }
        }, 200 * i);
      }
    },
    createSprite(url) {
      const sprite = this.pixi.createSprite(url);
      return sprite;
    },
    async createPill() {
      const config = [
        { name: "blue", url: "imgs/bluepill.png", positionX: 50 },
        {
          name: "red",
          url: "imgs/redpill.png",
          positionX: screen.width - 180,
        },
      ];
      config.forEach((e) => {
        const sprite = this.createSprite(e.url);
        sprite.y = 600;
        sprite.x = e.positionX;
        sprite.scale.set(0.35);
        sprite.alpha = 0; // 先设置为0
        sprite.visible = false;
        this.pixi.game.stage.addChild(sprite);
        this.addAnimation(() => {
          if (this.tipStatus) {
            sprite.visible = true;
            sprite.alpha = sprite.alpha >= 1 ? 1 : sprite.alpha + 0.025;
          }
        });
      });
    },
    addAnimation(fn) {
      this.pixi.addAnimation(fn);
    },
  },
  mounted() {
    this.init();
    // 文字提示
    this.text("_");
    this.updateText(this.tips);
    // 创建药丸
    this.createPill();
  },
};
</script>
