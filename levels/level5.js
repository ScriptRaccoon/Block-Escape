import { Block } from "../Block.js";
import { Player } from "../Player.js";
import { Level } from "../Level.js";

export const level5 = new Level([
    new Block([4, 2], [1, 4]),
    new Block([5, 1], [1, 4]),
    new Block([4, 6], [4, 1]),
    new Block([0, 4], [1, 3]),
    new Block([0, 0], [1, 3]),
    new Block([6, 2], [1, 4]),
    new Block([7, 1], [1, 4]),
    new Block([4, 0], [4, 1]),
    new Block([0, 3], [2, 1]),
    new Player([2, 2], [2, 1]),
    new Player([2, 4], [2, 1]),
]);
