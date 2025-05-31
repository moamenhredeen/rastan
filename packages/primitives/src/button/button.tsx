import { Component, ParentComponent } from 'solid-js'

/**
 *
 */
type ButtonProps = {
  /**
   * show loading indicator inside the butotn
   */
  loading: boolean
}

/**
 *
 * @param {ButtonProps} props
 * @returns
 */
export const Button: ParentComponent<ButtonProps> = props => {
  return <button {...props}>{props.children}</button>
}
