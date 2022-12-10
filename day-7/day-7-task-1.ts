import path from "path";
import { readInput } from "../util";

const data = readInput(path.resolve(__dirname, "day-7-data.txt"));
const lines = data.split("\n");

const CHANGE_DIR = "$ cd";
const LIST_DIR = "$ ls";
const DIRECTORY = "dir";
const CHANGE_TO_PARENT_DIR = "$ cd ..";

const WANTED_FILE_SIZE = 100000;

let smallDirsTotalSize = 0;

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
        totalSize += dirSize;
        if (dirSize <= WANTED_FILE_SIZE) smallDirsTotalSize += dirSize;
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

  return smallDirsTotalSize;
};

const total = enterDirectory();

console.log(
  `Total size of directories smaller than ${WANTED_FILE_SIZE}: ${total}.`
);
