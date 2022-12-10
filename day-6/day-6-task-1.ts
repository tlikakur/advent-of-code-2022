import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-6-data.txt"));

const MARKER_LENGTH = 4;
let startOfPacketIndex = MARKER_LENGTH;

for (let i = MARKER_LENGTH; i < data.length; i++) {
  const substr = data.slice(i - MARKER_LENGTH, i);
  if (new Set(substr).size === MARKER_LENGTH) break;
  startOfPacketIndex++;
}

console.log(`Start of packet index: ${startOfPacketIndex}`);
