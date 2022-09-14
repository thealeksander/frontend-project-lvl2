import yaml from 'js-yaml';

const parse = (format, filePath) => {
  switch (format) {
    case '.json':
      return JSON.parse(filePath);
    case '.yml':
    case '.yaml':
      return yaml.load(filePath);
    default:
      throw new Error(`Unknown type of format: ${format}`);
  }
};

export default parse;
