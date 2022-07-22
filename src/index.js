import { cwd } from 'node:process';

const gendiff = (paths) => {
  const readFile = paths.map((path) => {
    const absolutePath = path.resolve(path, process.cwd());
    const data = fs.readFileSync(absolutePath);
    return data;
  });
};
