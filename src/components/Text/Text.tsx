import React from "react";

interface Text extends React.HTMLAttributes<HTMLParagraphElement> {
    element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "code" | "a";
}

export const Text = ({ element, children, className }: Text) => {
    const GenericElement = ({
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) =>
        React.createElement(element, props, children);
    return <GenericElement className={className}>{children}</GenericElement>;
};
