import { cwd } from 'node:process';
import * as fs from 'node:fs';
import * as path from 'path';
import parser from './parser.js';
import compare from './compare.js';
import getdiff from './formatters/index.js';

const gendiff = (file1, file2, format = 'stylish') => {
  const readFile = (file) => {
    const absolutePath = path.resolve(cwd(), '__fixtures__', file);
    const data = fs.readFileSync(absolutePath);
    return data;
  };
  const getFormat = (file) => path.extname(file);

  const data1 = parser(getFormat(file1), readFile(file1));
  const data2 = parser(getFormat(file2), readFile(file2));

  return getdiff(compare(data1, data2), format);
};

export default gendiff;
