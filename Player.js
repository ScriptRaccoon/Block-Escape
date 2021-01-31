import { Block, TYPE } from "./Block.js";

export class Player extends Block {
    constructor(pos, size) {
        super(pos, size);
        this.isPlayer = true;
        this.element.addClass("player");
        if (this.type === TYPE.VERTICAL) {
            console.error("Players can only be horizontal");
            return;
        }
    }
}
