import styled from '@emotion/styled'
import Button from '../UI/Button'

export const ButtonDemo = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>ボタンのパターン</SectionTitle>
        <ButtonGroup>
          <Button>Hello</Button>
          <Button variant="secondary">Hello</Button>
          <Button variant="tertiary">Hello</Button>
        </ButtonGroup>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`
