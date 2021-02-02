import { Block, TYPE } from "./Block.js";

export class Player extends Block {
    constructor(pos, size) {
        super(pos, size);
        this.isPlayer = true;
        this.finished = false;
        this.element.addClass("player");
        if (this.type === TYPE.VERTICAL) {
            console.error("Players can currently only be horizontal");
            return;
        }
    }

    finish() {
        this.finished = true;
        this.element.fadeOut(1000);
    }
}
