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
  ["X", 0],
  ["Y", 3],
  ["Z", 6],
]);

const SHAPE_FOR_OUTCOME = new Map<string, string>([
  ["AX", "Z"],
  ["AY", "X"],
  ["AZ", "Y"],
  ["BX", "X"],
  ["BY", "Y"],
  ["BZ", "Z"],
  ["CX", "Y"],
  ["CY", "Z"],
  ["CZ", "X"],
]);

for (const line of lines) {
  const pair = line.split(" ");

  const shape = SHAPE_FOR_OUTCOME.get(pair.join(""));

  const shapePoints = SHAPE_POINTS.get(shape);
  const outcomePoints = OUTCOME_POINTS.get(pair[1]);

  totalPoints += shapePoints + outcomePoints;
}

console.log(`Total points for the specified strategy: ${totalPoints}.`);
