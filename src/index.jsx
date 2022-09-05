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

// const root = document.getElementById('root');
// if (root) {
//   ReactDOM.render(<Hello name="World" />, root);
// }

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


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="User" />, root);
}

// slides
// This component is a stateless (or a functional) component

// const Hello = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }

// const helloBoris = <Hello name="Boris" />;
// the value "Boris" won't change during the time helloBoris is
// displayed in the DOM. "Boris" is an intrinsic property of the
// `helloBoris` instance of the `Hello` component.
