export const UNIT = 100;
const LEVEL_WIDTH = parseInt($("#game").css("width")) / UNIT;
const LEVEL_HEIGHT = parseInt($("#game").css("height")) / UNIT;

export const TYPE = {
    HORIZONTAL: 0,
    VERTICAL: 1,
};

export class Block {
    constructor(pos, size) {
        this.level = null;
        this.pos = pos;
        this.size = size;
        this.isPlayer = false;
        this.type = null;

        if (this.size[0] > 1 && this.size[1] === 1) {
            this.type = TYPE.HORIZONTAL;
        } else if (this.size[0] === 1 && this.size[1] > 1) {
            this.type = TYPE.VERTICAL;
        } else {
            console.error("Size is not allowed");
            return;
        }

        this.element = $("<div></div>")
            .addClass("block")
            .css({
                left: this.pos[0] * UNIT + "px",
                top: this.pos[1] * UNIT + "px",
                width: this.size[0] * UNIT + "px",
                height: this.size[1] * UNIT + "px",
            })
            .click((e) => this.handleClick(e));
    }

    get left() {
        return this.pos[0];
    }

    get right() {
        return this.pos[0] + this.size[0];
    }

    get top() {
        return this.pos[1];
    }

    get bottom() {
        return this.pos[1] + this.size[1];
    }

    handleClick(e) {
        if (!this.level.isActive) return;
        const rect = this.element[0].getBoundingClientRect();
        const relativePos = [
            (e.clientX - rect.left) * (this.size[0] / rect.width),
            (e.clientY - rect.top) * (this.size[1] / rect.height),
        ];
        if (relativePos[0] > this.size[0] / 2 && this.type === TYPE.HORIZONTAL) {
            this.move("right");
        } else if (relativePos[0] < this.size[0] / 2 && this.type === TYPE.HORIZONTAL) {
            this.move("left");
        } else if (relativePos[1] > this.size[1] / 2 && this.type === TYPE.VERTICAL) {
            this.move("down");
        } else if (relativePos[1] < this.size[1] / 2 && this.type === TYPE.VERTICAL) {
            this.move("up");
        }
    }

    overlapsWith(block, offset = [0, 0]) {
        if (this === block) return false;
        return (
            this.left + offset[0] < block.right &&
            this.right + offset[0] > block.left &&
            this.bottom + offset[1] > block.top &&
            this.top + offset[1] < block.bottom
        );
    }

    noCollisions(offset) {
        return this.level.blockList.every((block) => !this.overlapsWith(block, offset));
    }

    canMove(direction) {
        switch (direction) {
            case "right":
                const bound = this.isPlayer ? LEVEL_WIDTH : LEVEL_WIDTH - 1;
                return this.right <= bound && this.noCollisions([1, 0]);
            case "left":
                return this.left > 0 && this.noCollisions([-1, 0]);
            case "up":
                return this.top > 0 && this.noCollisions([0, -1]);
            case "down":
                return this.bottom <= LEVEL_HEIGHT - 1 && this.noCollisions([0, 1]);
        }
    }

    move(direction) {
        if (!this.canMove(direction)) return;
        switch (direction) {
            case "right":
                this.pos[0]++;
                this.element.css({
                    left: this.left * UNIT + "px",
                });
                if (this.isPlayer && this.right === LEVEL_WIDTH + 1) {
                    this.level.handleWin();
                }
                break;
            case "left":
                this.pos[0]--;
                this.element.css({
                    left: this.left * UNIT + "px",
                });
                break;
            case "up":
                this.pos[1]--;
                this.element.css({
                    top: this.top * UNIT + "px",
                });
                break;
            case "down":
                this.pos[1]++;
                this.element.css({
                    top: this.top * UNIT + "px",
                });
                break;
        }
    }
}
