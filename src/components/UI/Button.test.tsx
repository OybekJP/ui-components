import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button Component', () => {
  test('ボタンをレンダリングして表示されるか確認', async () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = await screen.findByRole('Primary Button')
    expect(button).toBeInTheDocument()
  })
})
