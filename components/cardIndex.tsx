import { Card, Space, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'

interface pagesProps {
  name: string
  url: string
  path: string
}

const CardIndex = (props: pagesProps) => {
  const ref = `${props.url}`

  return (
    <Link href={props.path} passHref>
      <Card shadow="sm" p="xl" component="a" target="_blank">
        <Card.Section>
          <Image
            src={ref}
            alt="Mantine"
            width={200}
            height={200}
          />
        </Card.Section>

        <Space h={30} />
        <Title order={3}>{props.name} &rarr;</Title>
      </Card>
    </Link>
  )
}

export default CardIndex
