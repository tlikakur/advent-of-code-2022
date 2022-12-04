import path from "path";
import { readInput, sumHighestXNumbers } from "../util";

const data = readInput(path.resolve(__dirname, "day-1-data.txt"));
const lines = data.split("\n");

let currentSum: number = 0;

let NUMBER_OF_ELFS = 3;

const sums: number[] = [];

for (const line of lines) {
  if (line === "") {
    sums.push(currentSum);
    currentSum = 0;
    continue;
  }

  currentSum += +line;
}

const total = sumHighestXNumbers(sums, NUMBER_OF_ELFS);
console.log(`Top ${NUMBER_OF_ELFS} elfs are carrying ${total} calories.`);
