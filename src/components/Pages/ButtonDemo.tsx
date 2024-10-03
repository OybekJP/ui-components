import styled from '@emotion/styled'
import Button from '../UI/Button'
import { ArrowRightIcon, PencilIcon } from 'lucide-react'

export const ButtonDemo = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('フォームを送信しました！')
  }

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

      <Section>
        <SectionTitle>
          ボタンをリンクとして使った例（リンク先はtargetで指定済み）
        </SectionTitle>
        <DemoRow>
          <Label>アイコン無しのリンクの例</Label>
          <ButtonGroup>
            <Button
              as="a"
              href="https://example.com"
              variant="primary"
              target="_blank"
            >
              Hello
            </Button>
            <Button
              as="a"
              href="https://example.com"
              variant="secondary"
              target="_blank"
            >
              Hello
            </Button>
            <Button
              as="a"
              href="https://example.com"
              variant="tertiary"
              target="_blank"
            >
              Hello
            </Button>
          </ButtonGroup>
        </DemoRow>

        <DemoRow>
          <Label>アイコンがある時のリンクの例</Label>
          <ButtonGroup>
            <Button
              as="a"
              href="https://example.com"
              variant="primary"
              icon={<ArrowRightIcon size={16} />}
              iconPosition="right"
              target="_blank"
            >
              Subscribe
            </Button>
          </ButtonGroup>
        </DemoRow>
      </Section>

      <Section>
        <SectionTitle>フォームを送信するボタンの例</SectionTitle>
        <form onSubmit={handleSubmit}>
          <Button type="submit" variant="primary">
            Submit Form
          </Button>
        </form>
      </Section>

      <Section>
        <SectionTitle>disabledの時のボタンの例</SectionTitle>
        <ButtonGroup>
          <Button disabled>Hello</Button>
          <Button variant="secondary" disabled>
            Hello
          </Button>
          <Button variant="tertiary" disabled>
            Hello
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>loadingの時のボタンの例</SectionTitle>
        <ButtonGroup>
          <Button isLoading>Hello</Button>
          <Button variant="secondary" isLoading>
            Hello
          </Button>
          <Button variant="tertiary" isLoading>
            Hello
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>アイコンがある時のボタンの例</SectionTitle>

        <DemoRow>
          <Label>左アイコン</Label>
          <ButtonGroup>
            <Button variant="primary" icon={<PencilIcon size={16} />}>
              編集
            </Button>
            <Button variant="secondary" icon={<PencilIcon size={16} />}>
              編集
            </Button>
            <Button variant="tertiary" icon={<PencilIcon size={16} />}>
              編集
            </Button>
          </ButtonGroup>
        </DemoRow>

        <DemoRow>
          <Label>右アイコン</Label>
          <ButtonGroup>
            <Button
              variant="primary"
              icon={<ArrowRightIcon size={16} />}
              iconPosition="right"
            >
              次
            </Button>
            <Button
              variant="secondary"
              icon={<ArrowRightIcon size={16} />}
              iconPosition="right"
            >
              次
            </Button>
            <Button
              variant="tertiary"
              icon={<ArrowRightIcon size={16} />}
              iconPosition="right"
            >
              次
            </Button>
          </ButtonGroup>
        </DemoRow>
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
const DemoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`

const Label = styled.span`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`
