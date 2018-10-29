import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { submit, checkErrors } from '../actions';
import { validateInputs } from '../inputProps';

const Submit = ({inputs, errors, submit, checkErrors }) => {
    const noErrors = errors.length === 0;
    return <button
        className={noErrors ? "valid" : "invalid"}
        onMouseEnter={() => checkErrors(validateInputs(inputs))}
        onClick={() => noErrors ? submit(inputs) : undefined}
    >
        Submit
    </button>
};

const mapStateToProps = state => {
    const { inputs, errors } = state;
    return { inputs, errors }
};
const mapDispatchToProps = { submit, checkErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Submit);