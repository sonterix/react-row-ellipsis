interface EllipsisProps extends React.HTMLProps<HTMLParagraphElement> {
  text: string
  lines?: number
}

const Ellipsis = ({ lines, text, style, ...props }: EllipsisProps): JSX.Element => {
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
      {text}
    </p>
  )
}

Ellipsis.defaultProps = {
  lines: 1
}

export default Ellipsis
