import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  constructor(props) {
    super();
    console.log("App - Constructor", this.props);
    // this.state = this.props.something;
  }

  componentDidMount() {
    console.log("app - Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (id) => {
    let counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) {
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  render() {
    console.log("App - Rendered")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
