import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { inputProps } from './inputProps';
import Input from './Components/Input';
import Submit from './Components/Submit';
import Error from './Components/Error';
import { getForms } from './actions';

class App extends Component {
  componentWillMount = () => {
    this.props.getForms();
  }
  renderInputs = () => inputProps.map(input => {
    const { id, ...elementProps } = input;
    return <Input id={id} key={id} elementProps={elementProps} />
  })
  render() {
    return (
      <div className="App">
        <h1>Contact us</h1>
        {this.renderInputs()}
        <Error/>
        <Submit/>
      </div>
    );
  }
}
const mapDispatchToProps = { getForms };
export default connect(null, mapDispatchToProps)(App);
