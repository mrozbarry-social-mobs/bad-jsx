/** @jsx customJsx */

const customJsx = (...args) => {
  console.log('customJsx', args);
  return null;
};

const foo = <wut prop1="foo" prop2="bar" />;
