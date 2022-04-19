/// <reference types="react" />
interface EllipsisProps extends React.HTMLProps<HTMLElement> {
    lines?: number;
}
declare const Ellipsis: {
    ({ lines, style, children, ...props }: EllipsisProps): JSX.Element;
    defaultProps: {
        lines: number;
    };
};

export { Ellipsis };
