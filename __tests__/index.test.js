import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'node:fs';
import { expect } from '@jest/globals';
import { readFile } from 'fs';

beforeAll(() => {
    const __filename = fileURLToPath(import.meta.utl);
    const __dirname = dirname(__filename);
    const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
    const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
});

test('gendiff\'s main flow ', () => {
    const expected = readFile('result.txt');
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const actual = gendiff(filepath1, filepath2);
    expect(actual).toBe(expected);
});
