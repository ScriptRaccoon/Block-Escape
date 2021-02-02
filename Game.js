export class Game {
    constructor(levelList) {
        this.levelList = levelList;
        for (const level of levelList) {
            level.game = this;
        }
        this.currentLevelIndex = 0;
    }

    get currentLevel() {
        return this.levelList[this.currentLevelIndex];
    }

    start() {
        this.showLevelCount();
        this.currentLevel.start();
    }

    switchLevel() {
        this.currentLevel.finish();
        if (this.currentLevelIndex >= this.levelList.length - 1) {
            this.handleWin();
            return;
        }
        this.currentLevelIndex++;
        this.start();
    }

    showLevelCount() {
        $("#levelCount").text(this.currentLevelIndex + 1);
    }

    restart() {
        window.location.reload();
    }

    handleWin() {
        $("#goal").hide();
        $("<div></div>")
            .addClass("winMessage")
            .text("You won the game")
            .appendTo("#game");
        $("<input></input>")
            .addClass("replayBtn")
            .attr("type", "button")
            .attr("value", "Replay")
            .click(() => {
                this.restart();
            })
            .appendTo("#game");
    }
}
