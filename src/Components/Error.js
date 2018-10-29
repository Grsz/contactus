import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

const Error = ({ errors }) => {
    if(Boolean(errors.length)){
        const messages = errors.map((msg, i) => <li key={i}>{msg}</li>);
        return <ul>{messages}</ul>
    } else {
        return null
    }
};

const mapStateToProps = state => {
    const { errors } = state;
    return { errors }
};

export default connect(mapStateToProps)(Error);