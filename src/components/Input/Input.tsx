import { Fragment } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    rfc: React.RefObject<HTMLInputElement>;
    inputName?: string;
}

export const Input = ({ rfc, inputName, ...props }: InputProps) => (
    <Fragment>
        {inputName}
        <input ref={rfc} {...props} />
    </Fragment>
);
