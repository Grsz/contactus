const validationConditions = {
    twoWords: value => value.trim().split(" ").length > 1,
    onlyLetters: value => /^[a-zA-Z\s]*$/.test(value),
    email: value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
    notEmpty: value => Boolean(value)
}
export const validations = {
    name: [
        {
            valid: value => validationConditions.twoWords(value),
            errorMsg: "Please enter your full name"
        },
        {
            valid: value => validationConditions.onlyLetters(value),
            errorMsg: "Please use just letters at the Name field"
        }
    ],
    email: [
        {
            valid: value => validationConditions.email(value),
            errorMsg: "Please enter a valid e-mail address"
        }
    ],
    msg: [
        {
            valid: value => validationConditions.notEmpty(value),
            errorMsg: "Please enter your message"
        }
    ]
}
export const validateInputs = inputs => {
    const errors = [];
    Object.keys(inputs).forEach(id => {
        const value = inputs[id];

        errors.push(
            ...validations[id].filter(validation => 
                !validation.valid(value)
            ).map(validation => validation.errorMsg)
        );
    })
    return errors
};
export const inputProps = [
    {
        id: "name",
        element: "input",
        props: {
            placeholder: "Name",
            type: "text",
        },
    },
    {
        id: "email",
        element: "input",
        props: {
            placeholder: "E-mail",
            type: "email",
        },
    },
    {
        id: "msg",
        element: "textarea",
        props: {
            placeholder: "Message",
            rows: "4",
            cols: "50",
        },
    }
]