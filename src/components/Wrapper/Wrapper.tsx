export const Wrapper = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={className} {...props}>
        {children}
    </div>
);
