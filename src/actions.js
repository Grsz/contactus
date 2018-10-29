import { db } from './firebase';

export const inputChange = (value, id) => {
    return {
        type: 'INPUTCHANGE',
        value, id
    }
};
export const checkErrors = errors => {
    return {
        type: 'ERRORS',
        errors
    }
};
export const submit = form => async dispatch => {
    const id = db.push().key;
    db.child(id).set(form);
    dispatch({
        type: 'SUBMIT'
    })
};
export const getForms = () => async dispatch => {
    db.on('value', snap => {
        const forms = snap.val();
        dispatch({
            type: 'GET_FORMS',
            forms
        })
    })
};