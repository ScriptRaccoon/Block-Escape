export class Game {
    constructor(levelList) {
        this.levelList = levelList;
        for (const level of levelList) {
            level.game = this;
        }
        this.currentLevelIndex = 0;
        this.addLevelControl();
        this.isActive = true;
    }

    get currentLevel() {
        return this.levelList[this.currentLevelIndex];
    }

    addLevelControl() {
        $("#prevLevel").click(() => {
            if (this.prevLevelIsAvailable() && this.isActive) {
                this.currentLevel.isActive = false;
                this.currentLevelIndex--;
                this.currentLevel.restore();
                this.start();
            }
        });
        $("#nextLevel").click(() => {
            if (this.nextLevelIsAvailable() && this.isActive) {
                this.currentLevel.isActive = false;
                this.currentLevelIndex++;
                this.currentLevel.restore();
                this.start();
            }
        });
    }

    saveLevelProgress() {
        const levelProgress = parseInt(localStorage.getItem("levelProgress") || 0);
        localStorage.setItem(
            "levelProgress",
            Math.max(levelProgress, this.currentLevelIndex)
        );
    }

    getLevelProgress() {
        return parseInt(localStorage.getItem("levelProgress") || 0);
    }

    nextLevelIsAvailable() {
        return (
            this.currentLevelIndex <= this.getLevelProgress() &&
            this.currentLevelIndex < this.levelList.length - 1
        );
    }

    prevLevelIsAvailable() {
        return this.currentLevelIndex > 0;
    }

    start() {
        this.showLevelCount();
        this.currentLevel.start();
        $("#prevLevel").css("opacity", this.prevLevelIsAvailable() ? 1 : 0.3);
        $("#nextLevel").css("opacity", this.nextLevelIsAvailable() ? 1 : 0.3);
    }

    switchLevel() {
        this.saveLevelProgress();
        this.currentLevel.isActive = false;
        this.currentLevelIndex++;
        if (this.currentLevel) {
            this.start();
        } else {
            this.handleWin();
        }
    }

    showLevelCount() {
        $("#levelCount").text(this.currentLevelIndex + 1);
    }

    restart() {
        window.location.reload();
    }

    handleWin() {
        this.isActive = false;
        $(".goal").hide();
        $(".block").css("opacity", 0.5);
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
