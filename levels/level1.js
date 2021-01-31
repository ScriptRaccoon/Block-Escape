import { Block } from "../Block.js";
import { Player } from "../Player.js";
import { Level } from "../Level.js";

export const level1 = new Level([
    new Block([2, 2], [3, 1]),
    new Block([4, 3], [1, 2]),
    new Block([1, 4], [3, 1]),
    new Block([1, 2], [1, 2]),
    new Player([2, 3], [2, 1]),
]);
