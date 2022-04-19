interface EllipsisProps extends React.HTMLProps<HTMLElement> {
  lines?: number
}

const Ellipsis = ({ lines, style, children, ...props }: EllipsisProps): JSX.Element => {
  const customStyles: React.CSSProperties = {
    ...(style || {}),
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  return (
    <p style={customStyles} {...props}>
      {children}
    </p>
  )
}

Ellipsis.defaultProps = {
  lines: 1
}

export default Ellipsis
