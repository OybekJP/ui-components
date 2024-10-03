import styled from '@emotion/styled'
import Button from '../UI/Button'

export const ButtonDemo = () => {
  return (
    <Container>
      <Button>Hello</Button>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
