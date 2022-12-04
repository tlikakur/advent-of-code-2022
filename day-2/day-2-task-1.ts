import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-2-data.txt"));
const lines = data.split("\n");

let totalPoints = 0;

const SHAPE_POINTS = new Map<string, number>([
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);

const OUTCOME_POINTS = new Map<string, number>([
  ["AX", 3],
  ["AY", 6],
  ["AZ", 0],
  ["BX", 0],
  ["BY", 3],
  ["BZ", 6],
  ["CX", 6],
  ["CY", 0],
  ["CZ", 3],
]);

for (const line of lines) {
  const pair = line.split(" ");

  const shapePoints = SHAPE_POINTS.get(pair[1]);
  const outcomePoints = OUTCOME_POINTS.get(pair.join(""));

  totalPoints += shapePoints + outcomePoints;
}

console.log(`Total points for the specified strategy: ${totalPoints}.`);
