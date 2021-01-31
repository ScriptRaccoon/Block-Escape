import { Block } from "../Block.js";
import { Player } from "../Player.js";
import { Level } from "../Level.js";

export const level2 = new Level([
    new Block([0, 0], [1, 3]),
    new Block([1, 0], [1, 3]),
    new Block([4, 0], [3, 1]),
    new Block([7, 0], [2, 1]),
    new Block([2, 1], [3, 1]),
    new Block([4, 2], [1, 3]),
    new Block([3, 5], [4, 1]),
    new Block([2, 3], [1, 3]),
    new Block([8, 2], [1, 3]),
    new Player([0, 3], [2, 1]),
]);
