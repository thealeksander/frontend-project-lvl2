import { cwd } from 'node:process';
import { fs } from 'fs';
import { path } from 'path';

const gendiff = (pathsFiles) => {
  const readFiles = pathsFiles.map((pathFile) => {
    const absolutePath = path.resolve(pathFile, cwd());
    const data = fs.readFileSync(absolutePath);
    return data;
  });

  const getFormat = (pathFile) => path.extname(pathFile);
  
};
