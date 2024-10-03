import styled from '@emotion/styled'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface BaseButtonProps {
  variant?: ButtonVariant
}

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
  variant = 'primary',
}: {
  children: ReactNode
  variant?: ButtonVariant
}) => {
  return <StyledButton variant={variant}>{children}</StyledButton>
}

export default Button
