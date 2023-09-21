import {
  Card,
  Divider,
  Space,
  Image,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core'
import Link from 'next/link'
import { BrandGithub } from 'tabler-icons-react'
import styles from '../styles/Home.module.css'

interface projectProps {
  name: string
  description: string
  language: string
  href: string
  image: string
}

const Cards = (props: projectProps) => {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[0]

  return (
    <div style={{ width: 340 }}>
      <Link href={props.href} passHref>
        <Card
          className={styles.cursor}
          style={{ textAlign: 'center' }}
          shadow="sm"
          p="lg"
          sx={() => ({
            backgroundColor: '#17325E',
            '&:hover': {
              backgroundColor: theme.fn.darken('#17325E', 0.25),
            },
          })}
        >
          <Title order={3} style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {props.name}
          </Title>
          <Space h={30} />
          <Image
            src={props.image}
            alt="project"
            height={200}
            width={300}
            radius="md"
            sx={() => ({
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#00FFD1',
              },
            })}
          />
          <Space h={30} />
          
          <Text size="sm" style={{ color: '#fff', lineHeight: 1.5 }}>
            {props.description}
          </Text>
          <Space h={30} />
          <Divider size="sm" color={'#636262'} />
          <Space h={30} />
          <Title order={4} style={{ color: '#fff', lineHeight: 1.5 }}>
            {props.language}
          </Title>
          <Space h={30} />
          <Card.Section>
            <Link href={props.href} passHref>
              <ThemeIcon
                radius={'md'}
                size={50}
                sx={() => ({
                  backgroundColor: '#636262',
                  '&:hover': {
                    backgroundColor: '#00FFD1',
                  },
                })}
              >
                <BrandGithub size={100} color={'#fff'} />
              </ThemeIcon>
            </Link>
          </Card.Section>
        </Card>
      </Link>
      <Space h={30} />
    </div>
  )
}
export default Cards
