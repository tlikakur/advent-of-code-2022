import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-3-data.txt"));
const lines = data.split("\n");

let totalSumOfBadgePriorities = 0;

let NUM_OF_ELVES_IN_GROUP = 3;

function getBadgePriority(letter: string): number {
  return letter.charCodeAt(0) < 97
    ? letter.charCodeAt(0) - 38
    : letter.charCodeAt(0) - 96;
}

function getBadgeFromElvesGroup(rucksacks: string[]) {
  const firstRucksack = rucksacks.shift().split("");

  for (const item of firstRucksack) {
    if (rucksacks.every((rucksack) => rucksack.includes(item))) return item;
  }
}

for (let i = 0; i < lines.length; i += NUM_OF_ELVES_IN_GROUP) {
  const rucksacks = lines.slice(i, i + NUM_OF_ELVES_IN_GROUP);

  totalSumOfBadgePriorities += getBadgePriority(
    getBadgeFromElvesGroup(rucksacks)
  );
}

console.log(`Total sum of badges: ${totalSumOfBadgePriorities}.`);
