import React from 'react'

export interface IButtonProps {
  onClick?: () => void
  color?: string;
  label: string;
  primary: boolean;
  variant: "primary" | "secondary"
}

const Button = (props: IButtonProps) => {
  const {color = 'green', variant} = props
  return <div sx={{
    variant: `buttons.${variant}`,
  }}>{color}</div>
}

export default Button

