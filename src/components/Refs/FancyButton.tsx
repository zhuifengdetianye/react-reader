import * as React from 'react'

type ButtonProps = React.HTMLProps<HTMLButtonElement>

const FancyButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default FancyButton