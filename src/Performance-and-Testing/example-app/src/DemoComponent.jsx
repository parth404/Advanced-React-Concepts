/* eslint-disable react/prop-types */
import { Component } from "react";
// Example showing extended behaviour of React Memo

export class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }

  // this allows the component to re-render only when the count changes
  // returning true will re-render the component

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count !== this.state.count;
  }

  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState((state) => {
              return { count: state.count - 1 };
            })
          }
        >
          -
        </button>
        {this.state.count}
        <button
          onClick={() =>
            this.setState((state) => {
              return { count: state.count + 1 };
            })
          }
        >
          +
        </button>
      </>
    );
  }
}
