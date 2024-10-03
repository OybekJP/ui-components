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
`

const Button = ({ children }: { children: ReactNode }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
