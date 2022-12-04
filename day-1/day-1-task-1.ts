import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-1-data.txt"));
const lines = data.split("\n");

let max = 0;
let currentSum = 0;

for (const line of lines) {
  if (line === "") {
    if (currentSum > max) max = currentSum;
    currentSum = 0;
    continue;
  }

  currentSum += +line;
}

console.log(`The elf with the most calories is carrying ${max} calories.`);
