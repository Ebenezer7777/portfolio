/* eslint-disable react/no-unescaped-entities */

import {
  ActionIcon,
  Divider,
  Grid,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core'
import type { NextPage } from 'next'
import Link from 'next/link'
import { BrandGithub, BrandLinkedin, Mail, PhoneCall } from 'tabler-icons-react'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () => {
  return (
    <>
      <Space h={150} />
      <div className={styles.container}>
        <Title order={1}>Get in Touch</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        <Text align="center">
          I am looking for work-study and internship opportunities. My inbox is always
          open, leave me a message and I'll get back to you as soon as possible.
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
          breakpoints={[{ maxWidth: 980, cols: 1, spacing: 'sm' }]}
        >
          {' '}
          <Link href="tel:+33711223344" passHref>
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
              <div>
                <PhoneCall size={100} color={'#000'} />
                <Text weight={700}> +33 7 67 76 65 98</Text>
              </div>
            </ActionIcon>
          </Link>
          <Link href="mailto:ebenezerlassem6@gmail.com" passHref>
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
          <Link
            href="https://www.linkedin.com/in/eben-abdoulaye-825423203/"
            passHref
          >
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

          <Link href="https://github.com/Ebenezer7777" passHref>
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
