/* eslint-disable no-param-reassign */
import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const uniqKeys = _.uniq(...keys1, ...keys2);

  const result = uniqKeys.reduce((acc, key) => {
    const valueObj1 = obj1[key];
    const valueObj2 = obj2[key];

    if (valueObj1 === valueObj2) {
      acc += `  ${key}: ${valueObj1}\n`;
      return acc;
    }

    if (valueObj2 === undefined) {
      acc += `- ${key}: ${valueObj1}\n`;
      return acc;
    }

    if (valueObj1 === undefined) {
      acc += `- ${key}: ${valueObj2}\n`;
      return acc;
    }
    acc += `  - ${key}: ${valueObj1}\n`;
    acc += `  + ${key}: ${valueObj2}\n`;
    return acc;
  }, '');
  return result;
};

export default compare;
