import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-3-data.txt"));
const lines = data.split("\n");

let totalSumOfErrors = 0;

function getItemTypePriority(letter: string): number {
  return letter.charCodeAt(0) < 97
    ? letter.charCodeAt(0) - 38
    : letter.charCodeAt(0) - 96;
}

for (const line of lines) {
  if (line.length % 2 !== 0) {
    console.log(
      "Number of items in each compartment is not the same - skipping!"
    );

    continue;
  }

  const firstCompartment = line.slice(0, line.length / 2).split("");
  const secondCompartment = line.slice(line.length / 2, line.length).split("");

  for (const itemType of firstCompartment) {
    if (secondCompartment.includes(itemType)) {
      totalSumOfErrors += getItemTypePriority(itemType);
      break;
    }
  }
}

console.log(`Total sum of errors: ${totalSumOfErrors}.`);
