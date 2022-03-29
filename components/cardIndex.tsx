import { Card, Image, Space, Title } from '@mantine/core'
import Link  from 'next/link'

interface pagesProps {
  name: string
  url: string
  path: string
}

const CardIndex = (props: pagesProps) => {
  return (
    <Link href={props.path} passHref>
      <Card shadow="sm" p="xl" component="a"  target="_blank">
        <Card.Section>
          <Image radius={'xl'} src={props.url} height={200} 
          width={200} alt=""/>
        </Card.Section>

        <Space h={30} />
        <Title order={3}>{props.name} &rarr;</Title>
      </Card>
    </Link>
  )
}

export default CardIndex
