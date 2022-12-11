import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-8-data.txt"));
const lines = data.split("\n");

// TODO Fix
const trees: number[][] = lines.map(
  (line) => <number[]>(<unknown>Array.from(line))
);

const GRID_X = trees.length;
const GRID_Y = trees[0].length;

let visibleTrees: number = 0;

// A tree is visible if there are all smaller trees
// from at least one side (up, down, left, right)
for (let i = 0; i < GRID_X; i++) {
  for (let j = 0; j < GRID_Y; j++) {
    const currentTree = trees[i][j];
    const row = trees[i];
    const column = trees.map((x) => x[j]);

    // Check from left
    if (!row.slice(0, j).find((tree) => tree >= currentTree)) {
      visibleTrees++;
    }
    // Check from right
    else if (!row.slice(j + 1).find((tree) => tree >= currentTree)) {
      visibleTrees++;
    }
    // Check from up
    else if (!column.slice(0, i).find((tree) => tree >= currentTree)) {
      visibleTrees++;
    }
    // Check from down
    else if (!column.slice(i + 1).find((tree) => tree >= currentTree)) {
      visibleTrees++;
    }
  }
}
console.log(`Visible trees: ${visibleTrees}.`);
