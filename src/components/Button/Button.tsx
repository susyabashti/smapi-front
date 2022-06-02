import { useCallback } from "react";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    updateFn: () => void;
    text: string;
}

export const Button = ({ updateFn, text, ...props }: Button) => {
    const clickButton = useCallback(() => {
        if (updateFn !== undefined) {
            updateFn();
        }
    }, [updateFn]);

    return (
        <button type="submit" onClick={clickButton} {...props}>
            {text}
        </button>
    );
};
