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
    }

    start() {
        for (const player of this.playerList) {
            $("<div></div>")
                .addClass("goal")
                .css({ top: player.pos[1] * UNIT + "px" })
                .appendTo("#game");
        }
        for (const block of this.blockList) {
            block.element.appendTo("#game");
        }
        this.isActive = true;
        $("#levelInfo").addClass("scaleUp");
        setTimeout(() => {
            $("#levelInfo").removeClass("scaleUp");
        }, 2000);
    }

    finish() {
        $("#game").html("");
        this.isActive = false;
        this.won = true;
    }

    handleWin() {
        if (!this.playerList.every((player) => player.finished)) return;
        setTimeout(() => {
            this.game.switchLevel();
        }, 1000);
    }
}
