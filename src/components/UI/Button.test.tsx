import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button Component', () => {
  test('ボタンをレンダリングして表示されるか確認', async () => {
    render(<Button variant="primary">Primary Button</Button>)

    const button = await screen.findByRole('button')
    expect(button).toHaveTextContent(/^Primary Button$/)
    expect(button).toBeInTheDocument()
  })

  test('アイコンがあるボタンが表示されるか確認', () => {
    render(
      <Button icon={<span>🚀</span>} iconPosition="left">
        Launch
      </Button>
    )
    const icon = screen.getByText(/🚀/)
    const button = screen.getByText(/Launch/)
    expect(icon).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(icon).toBeVisible()
  })

  test('disabledが付与された場合ボタンがdisabledになるか確認', () => {
    render(<Button disabled>Disabled</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('anchorとして指定された時リンクが入っているか確認', () => {
    render(
      <Button as="a" href="https://example.com">
        Go to Example
      </Button>
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
