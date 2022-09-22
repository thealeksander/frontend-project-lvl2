import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'node:fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const variants = [
  { file1: 'file1.json',file2: 'file2.json', type: 'stylish'},
  { file1: 'file1.yml', file2: 'file2.yml'},
  { file1: 'file1.json',file2: 'file2.json', type: 'plain'},
  { file1: 'file1.yml', file2: 'file2.yml', type: 'plain'},
  { file1: 'file1.json',file2: 'file2.json', type: 'json'},
  { file1: 'file1.yml', file2: 'file2.yml', type: 'json'},
];

const resultStylish = readFile('result_stylish.txt');
const resultPlain = readFile('result_plain.txt');
const resultJson = readFile('result_json.txt');

test.each(variants)('gendiff-tests(%#)', ({file1, file2, type}) => {
  const actual = gendiff(getFixturePath(file1), getFixturePath(file2), type);
  const expected = (formatter) => {
    switch (formatter) {
      case 'stylish':
        return resultStylish;
      case 'plain':
        return resultPlain;
      case 'json':
        return resultJson;
      default:
        return resultStylish;
    }
  };
  expect(actual).toBe(expected(type));
});
