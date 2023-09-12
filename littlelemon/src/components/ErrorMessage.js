import { useStyleContext } from "../context/StyleContext";

const ErrorMessage = (props) => {
    const {
        classParagraphText,
    } = useStyleContext();

    return props.message ? <p className={`FieldError ${classParagraphText}`}>{props.message}</p> : null;
};

export default ErrorMessage;