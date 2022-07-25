import { cwd } from 'node:process';
import * as fs from 'node:fs';
import * as path from 'path';
import parser from './parser.js';
import compare from './compare.js';

const gendiff = (file1, file2) => {
  const readFile = (file) => {
    const absolutePath = path.resolve(cwd(), '__fixtures__', file);
    const data = fs.readFileSync(absolutePath);
    return data;
  };

  const getFormat = (file) => path.extname(file);

  const objectFile1 = parser(getFormat(file1), readFile(file1));
  const objectFile2 = parser(getFormat(file2), readFile(file2));

  return `{\n${compare(objectFile1, objectFile2)}}`;
};

export default gendiff;
