import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { inputChange } from '../actions';

const Input = ({id, elementProps, inputChange, inputs}) => {
    const { element, props } = elementProps;
    return React.createElement(element, {
        ...props,
        onChange: (event => inputChange(event.target.value, id)),
        value: inputs[id]
    })
};

const mapStateToProps = state => {
  const { inputs } = state;
  return { inputs }
};
const mapDispatchToProps = { inputChange };

export default connect(mapStateToProps, mapDispatchToProps)(Input);