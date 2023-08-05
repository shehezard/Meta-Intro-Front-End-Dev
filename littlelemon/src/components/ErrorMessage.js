const ErrorMessage = (props) => {
    return props.message ? <p className="FieldError">{props.message}</p> : null;
};

export default ErrorMessage;