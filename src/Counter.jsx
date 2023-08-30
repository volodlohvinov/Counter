import React, { Component } from 'react';
import './Counter.scss'

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.initialValue
      };
    }
  
    handleIncrement = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
  
    handleDecrement = () => {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    };
  
    handleReset = () => {
      this.setState({ count: this.props.initialValue });
    };
  
    render() {
      return (
        <div>
          <h1>Counter App</h1>
          <p className='current'>Current Value: {this.state.count}</p>
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleIncrement}>+</button>
          
        </div>
      );
    }
  }
  
  export default Counter;