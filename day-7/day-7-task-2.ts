import { FILE } from "dns";
import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-7-data.txt"));
const lines = data.split("\n");

const CHANGE_DIR = "$ cd";
const LIST_DIR = "$ ls";
const DIRECTORY = "dir";
const CHANGE_TO_PARENT_DIR = "$ cd ..";

const FILESYSTEM_TOTAL_SIZE = 70000000;
const UPDATE_TOTAL_SIZE = 30000000;

const dirSizes: number[] = [];

// Pass through directories recursively
const enterDirectory = (): number => {
  let totalSize = 0;

  while (lines.length) {
    const line = lines.shift();

    // $ cd
    if (line.startsWith(CHANGE_DIR)) {
      // $ cd .. - Just return size
      if (line.startsWith(CHANGE_TO_PARENT_DIR)) return totalSize;
      // $ cd dirname - Iterate through the directory, add the dir size
      else {
        const dirSize = enterDirectory();
        dirSizes.push(dirSize);
        totalSize += dirSize;
      }
    }

    // $ ls
    else if (line.startsWith(LIST_DIR)) {
      // Do nothing?
    }

    // If not CHANGE DIR & not DIRECTORY LISTING, it's file size
    else if (!line.startsWith(DIRECTORY)) {
      totalSize += +line.split(" ")[0];
    }
  }

  dirSizes.push(totalSize);
  return totalSize;
};

const total = enterDirectory();

const minSizeToFreeUp = UPDATE_TOTAL_SIZE - (FILESYSTEM_TOTAL_SIZE - total);
console.log(`Need to free up at least ${minSizeToFreeUp} bytes.`);

const smallestApplicableSize = dirSizes
  .sort((a, b) => a - b)
  .find((size) => size >= minSizeToFreeUp);

console.log(`Need to delete a directory with ${smallestApplicableSize}`);
