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

const getViewDistance = (
  currentTree: number,
  trees: number[],
  print = false
): number => {
  return trees.findIndex((tree) => tree >= currentTree) + 1 || trees.length;
};

// A tree is visible if there are all smaller trees
// from at least one side (up, down, left, right)

let maxScenicScore = 0;

for (let i = 0; i < GRID_X; i++) {
  for (let j = 0; j < GRID_Y; j++) {
    const currentTree = trees[i][j];
    const row = trees[i];
    const column = trees.map((x) => x[j]);

    let scenicScore = 1;

    scenicScore *= getViewDistance(currentTree, row.slice(0, j).reverse());
    scenicScore *= getViewDistance(currentTree, row.slice(j + 1));
    scenicScore *= getViewDistance(currentTree, column.slice(0, i).reverse());
    scenicScore *= getViewDistance(currentTree, column.slice(i + 1));

    if (scenicScore > maxScenicScore) maxScenicScore = scenicScore;
  }
}

console.log(`Maximum scenic score: ${maxScenicScore}`);
