import { createElement } from 'react'

interface EllipsisProps extends React.HTMLProps<HTMLElement> {
  lines?: number
  as?: string
}

const Ellipsis = ({ lines, as, style, children, ...props }: EllipsisProps): JSX.Element => {
  const customStyles: React.CSSProperties = {
    ...(style || {}),
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  return createElement(as || 'p', { style: customStyles, ...props }, children)
}

Ellipsis.defaultProps = {
  lines: 1,
  as: 'p'
}

export default Ellipsis
