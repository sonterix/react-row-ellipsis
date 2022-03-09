type EllipsisProps = {
  [key: string]: any
  lines?: number
  text: string
}

const Ellipsis = ({ lines, text, ...props }: EllipsisProps): JSX.Element => (
  <p
    style={{
      display: '-webkit-box',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }}
    {...props}
  >
    {text}
  </p>
)

Ellipsis.defaultProps = {
  lines: 1
}

export default Ellipsis
