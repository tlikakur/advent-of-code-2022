import path from "path";
import { readInput, splitByMultipleDelimiters } from "../util";

const data = readInput(path.resolve(__dirname, "day-5-data.txt"));
const lines = data.split("\n");

// Initial crate stacks
const crateStacks = [
  ["D", "H", "N", "Q", "T", "W", "V", "B"],
  ["D", "W", "B"],
  ["T", "S", "Q", "W", "J", "C"],
  ["F", "J", "R", "N", "Z", "T", "P"],
  ["G", "P", "V", "J", "M", "S", "T"],
  ["B", "W", "F", "T", "N"],
  ["B", "L", "D", "Q", "F", "H", "V", "N"],
  ["H", "P", "F", "R"],
  ["Z", "S", "M", "B", "L", "P", "N", "H"],
];

// Remove until blank line
while (lines.shift() != "");

for (const line of lines) {
  const data = splitByMultipleDelimiters(line, ["move ", " from ", " to "]);

  // Take the last x crates from stack
  const takeStackLength = crateStacks[+data[1] - 1].length;
  const removedCrates = crateStacks[+data[1] - 1].splice(
    takeStackLength - +data[0],
    takeStackLength
  );

  // Reverse the order & add to the new stack
  crateStacks[+data[2] - 1] = crateStacks[+data[2] - 1].concat(
    ...removedCrates.reverse()
  );
}

let topCrates: string = "";
crateStacks.forEach((stack) => (topCrates += stack.at(-1) ?? ""));
console.log(topCrates);
