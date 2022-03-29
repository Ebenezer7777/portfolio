import {
  Card,
  Divider,
  Space,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme
} from '@mantine/core';
import Link from 'next/link';
import { BrandGithub } from 'tabler-icons-react';



interface projectProps {
  titre: string;
  description: string;
  language: string;
}



const Cards = (props: projectProps) => {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[0]

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card
        style={{ textAlign: 'center' }}
        shadow="sm"
        p="lg"
        sx={(theme) => ({
          backgroundColor: '#17325E',
          '&:hover': {
            backgroundColor: theme.colors.cyan[2],
          },
        })}
      >
        <Title order={3} style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.titre}
        </Title>

        <Text size="sm" style={{ color: '#fff', lineHeight: 1.5 }}>
          {props.description}
        </Text>
        <Space h={30} />
        <Divider size="sm" color={'#636262'} />
        <Space h={30} />
        <Title order={3} color={'#636262'} style={{ lineHeight: 1.5 }}>
         {props.language}
        </Title>
        <Space h={30} />
        <Card.Section>
          <Link href="">
            <ThemeIcon
              radius={'xl'}
              size={50}
              sx={(theme) => ({
                backgroundColor: '#636262',
                '&:hover': {
                  backgroundColor: 'none',
                },
              })}
            >
              <BrandGithub size={100} color={'#fff'} />
            </ThemeIcon>
          </Link>
        </Card.Section>
      </Card>
      <Space h={30} />
    </div>
  )
}
export default Cards
