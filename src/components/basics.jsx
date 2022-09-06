import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';


// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
          Hello {this.props.name} {this.state.counter}
      </div>
    );
  }
}


// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="User" />, root);
// }

// slides
// This component is a stateless (or a functional) component

// const Hello = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }

// const helloBoris = <Hello name="Boris" />;
// the value "Boris" won't change during the time helloBoris is
// displayed in the DOM. "Boris" is an intrinsic property of the
// `helloBoris` instance of the `Hello` component.


// challenge 1

// export function filterTypes(values) {
//   const result = {
//     number: [],
//     string: [],
//     object: [],
//     others: []
//   }
//   // Your code here
//   values.filter((v) => {
//     if (typeof v === 'number') {
//       return result.number.push(v);
//     }
//     else if (typeof v === 'string') {
//       return result.string.push(v);
//     }
//     else if (typeof v === 'object') {
//       return result.object.push(v);
//     }
//     else {
//       return result.others.push(v);
//     }
//   });
//   return result;
// }

// console.log(filterTypes([1, 2, '3', {}, [], false, '1', '2', 3, null, undefined]));


// This code could be done using forEach instead of filter,
// but we need to filter a especific type of element in the array,
// so in this case the filter is the best choice
// using  filter we don't  update the existing array, we just return a filtered array

// challenge 2

// export function mergeArrays(array1, array2) {
//   const map = new Map();
//   const arr3 = [...array1, ...array2];

//   for(const item of arr3) {
//     if(!map.has(item.Id)) {
//       map.set(item.Id, item);
//     } else {
//       map.set(item.Id, {
//         ...map.get(item.Id),
//         ...item,
//       });
//     }
//   }

//   const arr4 = [...map.values()];
//   return arr4;
// }

// const arr1 = [{Id: 'a1'}, {Id: 'a2', Name: 'Record 2', Cost: 4}];
// const arr2 = [{Id: 'a2', Cost: 6}, {Id: 'a3'}];

// const result = mergeArrays(arr1, arr2);
// console.log(result);

// We create a new const map = new Map(),
// basically a empty array-like to receive the items for the interator

// then we merge both arrays to a new unique array

// for each "item" in this unique array, we check the map do not has the 'item.Id'
// if do not have it, map set the item.Id and the item(which will be the value)

// if map has the item.Id, we use the spread syntax to merge both items with same ID,
// and to merge both items(values, its the object) and save it to map

// then we create a new const arr4, and use the values(objects) of the map
