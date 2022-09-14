import { readFileSync } from 'fs';
import * as path from 'path';
import parse from './parser.js';
import buildTree from './buildTree.js';
import getdiff from './formatters/index.js';

const getData = (filepath) => readFileSync(path.resolve(`${process.cwd()}`, filepath));
const getExtension = (filepath) => path.extname(filepath).slice(1);

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = parse(getData(filePath1), getExtension(filePath1));
  const data2 = parse(getData(filePath2), getExtension(filePath2));
  return getdiff(buildTree(data1, data2), format);
};

export default gendiff;
