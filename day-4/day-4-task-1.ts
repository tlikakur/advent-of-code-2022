import path from "path";
import { isBetween, readInput } from "../util";

let totalOverlaps = 0;

const data = readInput(path.resolve(__dirname, "day-4-data.txt"));
const lines = data.split("\n");

for (const line of lines) {
  const pairs = line.split(",");

  let ranges: number[][] = [];

  ranges = pairs.map((pair) => [+pair.split("-")[0], +pair.split("-")[1]]);

  // Check first within second
  if (
    isBetween(ranges[0].at(0), ranges[0].at(1), ranges[1].at(0)) &&
    isBetween(ranges[0].at(0), ranges[0].at(1), ranges[1].at(1))
  ) {
    totalOverlaps++;
  }
  // Check second within first
  else if (
    isBetween(ranges[1].at(0), ranges[1].at(1), ranges[0].at(0)) &&
    isBetween(ranges[1].at(0), ranges[1].at(1), ranges[0].at(1))
  ) {
    totalOverlaps++;
  }
}

console.log(`Total overlaps: ${totalOverlaps}.`);
