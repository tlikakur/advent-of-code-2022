import fs from "fs";

export function readInput(fileName: string): string {
  return fs.readFileSync(fileName).toString();
}

export function sumHighestXNumbers(array: number[], X: number): number {
  return array
    .sort((a, b) => b - a)
    .slice(0, X)
    .reduce((sum, curr) => sum + curr, 0);
}

export function isBetween(first: number, second: number, current: number) {
  return (
    (first <= current && current <= second) ||
    (first >= current && current >= second)
  );
}
