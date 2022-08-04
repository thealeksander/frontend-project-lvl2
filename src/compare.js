/* eslint-disable no-param-reassign */
import _ from 'lodash';

const compare = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys
    .map((key) => {
      const valueObj1 = obj1[key];
      const valueObj2 = obj2[key];

      const keyObj1 = `  - ${key}: ${valueObj1}`;
      const keyObj2 = `  + ${key}: ${valueObj2}`;
      const equalKeys = `    ${key}: ${valueObj1}`;

      if (key in obj1 && key in obj2) {
        return (valueObj1 === valueObj2) ? equalKeys : `${keyObj1}\n${keyObj2}`;
      }

      if (valueObj2 === undefined) {
        return keyObj1;
      }

      return keyObj2;
    })
    .join('\n');

  return result;
};

export default compare;
