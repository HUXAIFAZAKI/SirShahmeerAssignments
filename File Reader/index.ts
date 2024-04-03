import * as fs from 'fs';

function readFile(filepath: string): string {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    return data;
  } catch (error) {
    console.error(`Error reading file: ${filepath}`, error);
    throw error;
  }
}

const filePath = 'test.txt';
const fileData = readFile(filePath);
console.log(fileData);