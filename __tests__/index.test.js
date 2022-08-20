import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'node:fs';
import { expect } from '@jest/globals';
import { readFile } from 'fs';

beforeAll(() => {
    const _filename = fileURLToPath(import.meta.utl);
    const _dirname = dirname(_filename);
    const getFixturePath = (filename) => path.join(_dirname, '..', '__fixtures__', filename);
    const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf8');
});

test('gendiff\'s main flow ', () => {
    const expected = readFile('result.txt');
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const actual = gendiff(filepath1, filepath2);
    expect(actual).toBe(expected);
});
