import React from 'react'

export interface IButtonProps {
  onClick?: () => void
  color?: string;
  label: string;
  primary: boolean;
}

const Button = (props: IButtonProps) => {
  const {color = 'green'} = props
  return <div>{color}</div>
}

export default Button

