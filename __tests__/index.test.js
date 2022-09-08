import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import * as fs from 'node:fs';
import { expect } from '@jest/globals';

let readFile;
let __dirname;
let __filename;
let getFixturePath;

beforeAll(() => {
    __filename = fileURLToPath(import.meta.url);
    __dirname = dirname(__filename);
    getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
    readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
});

describe('gendiff\'s main flow ', () => {
    test('with json format', () => {
        const expected = readFile('result_stylish.txt');
        const filepath1 = getFixturePath('file1.json');
        const filepath2 = getFixturePath('file2.json');
        const actual = gendiff(filepath1, filepath2, 'stylish');
        expect(actual).toBe(expected);
    });
    test('with yaml format', () => {
        const expected = readFile('result_stylish.txt');
        const filepath1 = getFixturePath('file1.yml');
        const filepath2 = getFixturePath('file2.yml');
        const actual = gendiff(filepath1, filepath2, 'stylish');
        expect(actual).toBe(expected);
    });
});
