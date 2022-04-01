import {
  ActionIcon, Divider,
  Grid,
  SimpleGrid,
  Space,
  Text,
  Title
} from '@mantine/core'
import type { NextPage } from 'next'
import Link from 'next/link'
import { BrandGithub, BrandLinkedin, Mail } from 'tabler-icons-react'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
  return (
    <>
      <Space h={150} />
      <div className={styles.container}>

        <Space h={80} />
        <Title order={1}>Get in Touch</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        <Text align="center">
          I am primarily looking for internship opportunities, though I do
          dabble in freelance from time to time. My inbox is always open, leave
          me a message and ll get back to you as soon as possible.
        </Text>
        <Space h={100} />
       
        <SimpleGrid
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 1, spacing: 'sm' },

          ]}
        >
          {' '}
          <Link href="">
            <ActionIcon
              mx={50}
              mb={50}
              radius={30}
              size={150}
              sx={(theme) => ({
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            >
              <BrandLinkedin size={200} color={'#000'} />
            </ActionIcon>
          </Link>
          <Link href="">
            <ActionIcon
              mx={50}
              mb={50}
              radius={30}
              size={150}
              sx={(theme) => ({
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            >
              <Mail size={200} color={'#000'} />
            </ActionIcon>
          </Link>
          <Link href="">
            <ActionIcon
              mx={50}
              mb={50}
              radius={30}
              size={150}
              sx={(theme) => ({
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            >
              <BrandGithub size={200} color={'#000'} />
            </ActionIcon>
          </Link>
        </SimpleGrid>
      </div>
      <Space h={80} />
    </>
  )
}

export default Contact
