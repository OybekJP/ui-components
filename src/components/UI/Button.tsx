import styled from '@emotion/styled'
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface BaseButtonProps {
  variant?: ButtonVariant
  isLoading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button'
  }

type ButtonAsLink = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a'
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const StyledButton = styled('button')<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant = 'primary' }) => getVariantStyles(variant)}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px #7cabf7;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return `
        background-color: #000;
        color: white;
        border: none;
        &:hover:not(:disabled) {
          opacity: 0.6;
        }
      `
    case 'secondary':
      return `
        background-color: white;
        color: #000;
        border: 1px solid #000;
        &:hover:not(:disabled) {
          opacity: 0.6;
        }
      `
    case 'tertiary':
      return `
        background-color: white;
        color: #000;
        border: none;
        &:hover:not(:disabled) {
          opacity: 0.6;
        }
      `
  }
}

const Button = ({
  children,
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="icon-left">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="icon-right">{icon}</span>
      )}
    </>
  )

  if ((props as ButtonAsLink).as === 'a') {
    const { as, ...linkProps } = props as ButtonAsLink
    return (
      <StyledButton as="a" {...linkProps}>
        {content}
      </StyledButton>
    )
  }

  return <StyledButton {...(props as ButtonAsButton)}>{content}</StyledButton>
}

export default Button
