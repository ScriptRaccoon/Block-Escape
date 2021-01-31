import { Game } from "./Game.js";
import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";

const game = new Game([level1, level2, level3, level4]);

game.start();
