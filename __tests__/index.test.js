import { expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'node:fs';
import formatName from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const variants = [
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yml', 'file2.yml'],
  ['file1.json', 'file2.json', 'plain'],
  ['file1.yml', 'file2.yml', 'plain'],
  ['file1.json', 'file2.json', 'json'],
  ['file1.yml', 'file2.yml', 'json'],
];

const result_stylish = readFile('result_stylish.txt');
const result_plain = readFile('result_plain.txt');
const result_json = readFile('result_json.txt');

test.each(variants)('genDiff-tests', (file1, file2, format = 'stylish') => {
  const actual = formatName(getFixturePath(file1), getFixturePath(file2), format);
  const expected = (formatter) => {
    switch (formatter) {
      case 'stylish':
        return result_stylish;
      case 'plain':
        return result_plain;
      case 'json':
        return result_json;
      default:
        throw new Error(`Unknown type of format: ${formatter}`);
    }
  };
  expect(actual).toBe(expected(format));
});
