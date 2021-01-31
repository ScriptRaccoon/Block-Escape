import { Block } from "../Block.js";
import { Player } from "../Player.js";
import { Level } from "../Level.js";

export const level3 = new Level([
    new Block([8, 3], [1, 3]),
    new Block([6, 2], [1, 3]),
    new Block([7, 2], [2, 1]),
    new Block([5, 0], [1, 3]),
    new Block([2, 0], [1, 3]),
    new Block([5, 6], [4, 1]),
    new Block([4, 5], [1, 2]),
    new Block([1, 4], [2, 1]),
    new Block([2, 5], [2, 1]),
    new Block([5, 5], [3, 1]),
    new Block([3, 1], [2, 1]),
    new Block([4, 2], [1, 3]),
    new Player([1, 3], [2, 1]),
]);
