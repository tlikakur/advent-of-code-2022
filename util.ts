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

export function splitByMultipleDelimiters(
  line: string,
  tokens: string[]
): string[] {
  var tempChar = tokens[0];

  for (var i = 1; i < tokens.length; i++) {
    line = line.split(tokens[i]).join(tempChar);
  }

  return line.split(tempChar).slice(1);
}
