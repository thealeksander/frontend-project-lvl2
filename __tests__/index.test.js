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
  ['file1.json', 'file2.json', 'stylish'],
  ['file1.yml', 'file2.yml'],
  ['file1.json', 'file2.json', 'plain'],
  ['file1.yml', 'file2.yml', 'plain'],
  ['file1.json', 'file2.json', 'json'],
  ['file1.yml', 'file2.yml', 'json'],
];

test.each(variants)('gendiff-tests', (file1, file2, format = 'stylish') => {
  const actual = gendiff(getFixturePath(file1), getFixturePath(file2), format);
  const expected = (formatter) => {
    switch (formatter) {
      case 'stylish':
        return readFile('result_stylish.txt');
      case 'plain':
        return readFile('result_plain.txt');
      case 'json':
        return readFile('result_json.txt');
      default:
        throw new Error(`Unknown type of format: ${formatter}`);
    }
  };
  expect(actual).toBe(expected(format));
});
