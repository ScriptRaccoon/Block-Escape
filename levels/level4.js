import { Block } from "../Block.js";
import { Player } from "../Player.js";
import { Level } from "../Level.js";

export const level4 = new Level([
    new Block([3, 2], [3, 1]),
    new Block([5, 3], [1, 2]),
    new Block([2, 4], [3, 1]),
    new Block([2, 2], [1, 2]),
    new Block([2, 5], [4, 1]),
    new Block([1, 2], [1, 4]),
    new Block([1, 1], [5, 1]),
    new Block([6, 1], [1, 3]),
    new Block([1, 6], [6, 1]),
    new Block([0, 1], [1, 6]),
    new Block([0, 0], [7, 1]),
    new Block([7, 0], [1, 3]),
    new Player([3, 3], [2, 1]),
]);
