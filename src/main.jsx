/** @jsx customJsx */

//const createElement = (name) => document.createElement(name);
//const attrs = (props) => element => {
//  for (const key in props) {
//    const value = props[key];
//    if (key in element) {
//      element[key] = value;
//    } else {
//      element.setAttribute(key, value);
//    }
//  }
//
//  return element;
//}
//const appendChildren = (children) => element => {
//  children.forEach(child => element.appendChild(typeof child === 'string'
//    ? document.createTextNode(child)
//    : child
//  ));
//  return element
//}

const vdom = {
  tag: 'div',
  props: {},
  children: [
    { t: 'input' }
  ],
}

const vdom2 = React.createElement()


const customJsx = (tag, props, ...children) => {
  console.log('customJsx', tag, props, children);
  return typeof tag === 'string'
    ? { tag, props, children } // appendChildren(children)(attrs(props)(createElement(tag)))
    : tag(props, ...children);

  // children === 'number'
  // <AddOne>1</AddOne>
};

const MyInput = (props, ...label) => (
  <div>
    <label>{label.join(' ')}</label>
    <input {...props} />
  </div>
)

const foo = (text) => (
  <div prop1="foo" prop2="bar">
    <huh>{text}</huh>
    <MyInput type="text">{`${text} label`}</MyInput>
  </div>
);
foo('Huh');
foo('Yoyoyoy');

const bar = customJsx('wut', { prop1: 'foo', prop2: 'bar' },
  customJsx('huh', {})
);

console.log('result of foo', foo);
console.log('result of bar', bar);

const Farts = (props, ...children) => {
  return props?.type === 'loud'
    ? 'Gross!'
    : 'Not bad';
}



const shouldBeBroken = <Farts />;
console.log(shouldBeBroken);

const AddOne = (props, ...children) => {
  return children + 1
}

console.log('Add One Component', <AddOne>{ 1 }{ 2 }</AddOne>);

const component = (props, child) =>
document.body.innerHTML = `
<div><h1>${child}</h1></div>
`
component({}, 'hi')