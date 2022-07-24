import yaml from 'js-yaml';

const parser = (format, filePath) => {
  let result;
  if (format === '.json') {
    result = JSON.parse(filePath);
  } else if (format === '.yaml') {
    result = yaml.load(filePath);
  }
  return result;
};

export default parser;
