/* eslint-disable react/prop-types */
import { PureComponent } from "react";
// Example showing memoization of a class component

export class PureCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
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
