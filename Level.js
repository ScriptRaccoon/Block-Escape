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
        this.playerList = blockList.filter((block) => block.isPlayer);
        if (this.playerList.length === 0) {
            console.error("No player found");
            return;
        }
        this.isActive = false;
        this.removedBlocks = [];
    }

    start() {
        $("#game").html("");
        this.isActive = true;
        for (const player of this.playerList) {
            $("<div></div>")
                .addClass("goal")
                .css({ top: player.pos[1] * UNIT + "px" })
                .appendTo("#game");
        }
        for (const block of this.blockList) {
            block.element.appendTo("#game");
        }
        $("#levelInfo").addClass("scaleUp");
        setTimeout(() => {
            $("#levelInfo").removeClass("scaleUp");
        }, 2000);
    }

    handleWin() {
        if (this.playerList.every((player) => player.finished)) {
            this.won = true;
            setTimeout(() => {
                this.game.switchLevel();
            }, 1000);
        }
    }

    restore() {
        for (const block of this.removedBlocks) {
            this.blockList.push(block);
        }
        for (const block of this.blockList) {
            block.restore();
        }
        this.removedBlocks = [];
    }
}
