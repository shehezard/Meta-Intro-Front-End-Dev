import { useStyleContext } from "../context/StyleContext";

const ErrorMessage = (props) => {
    const { classParagraphText, } = useStyleContext();

    // Add ARIA attributes to indicate the error message
    const ariaProps = {
        "aria-live": "assertive", // Announces the error immediately
        "aria-atomic": "true",    // Forces screen readers to read the entire message
        "role": "alert",          // Indicates an important message (an error)
    };

    return props.message ? <p className={`FieldError ${classParagraphText}`}  {...ariaProps}>{props.message}</p> : null;
};

export default ErrorMessage;