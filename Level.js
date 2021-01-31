import { UNIT } from "./Block.js";

export class Level {
    constructor(blockList) {
        this.game = null;
        this.blockList = blockList;
        for (const block of blockList) {
            block.level = this;
            const test = block.noCollisions();
            if (!test) {
                console.error("There are collisions");
                return;
            }
        }
        this.won = false;
        this.player = blockList.find((block) => block.isPlayer);
        if (!this.player) {
            console.error("No player found");
            return;
        }
        this.goalHeight = this.player.pos[1];
        this.isActive = false;
    }

    start() {
        $("#goal").css({ top: this.goalHeight * UNIT + "px" });
        for (const block of this.blockList) {
            block.element.appendTo("#game");
        }
        this.isActive = true;
        $("#levelInfo").addClass("scaleUp");
        setTimeout(() => {
            $("#levelInfo").removeClass("scaleUp");
        }, 2000);
    }

    stop() {
        this.isActive = false;
        for (const block of this.blockList) {
            block.element.remove();
        }
    }

    handleWin() {
        this.isActive = false;
        this.won = true;
        this.player.element.fadeOut(1000);
        setTimeout(() => {
            this.game.switchLevel();
        }, 1000);
    }
}
