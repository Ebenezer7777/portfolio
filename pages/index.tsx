import {
  Button,
  Center,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [opened, setOpen] = useState(false)
  const theme = useMantineTheme()
  const duration = 500
  return (
    <>
      <Space h={150} />
      <div className={styles.container}>
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Title order={2}>Hey there</Title>

            <Space h={10} />
            <Title order={1}>My name is Ebenezer</Title>
            <Space h={10} />
            <Title order={2}>And i like build stuffs</Title>
            <Space h={10} />

            <Center>
              <Text size="xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, non. Nihil nobis perspiciatis facere sit voluptate
                delectus? Ipsum hic quam enim placeat tempore consequuntur et
                earum, ab architecto, illum atque. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Animi, etatibus explicabo ducimus,
                cumque, et at temporibus quisquam.
              </Text>
            </Center>
            <Space h={15} />
            <Center>
              <Button>Hire Me</Button>{' '}
            </Center>

            <Space h={10} />
          </Grid.Col>
          <Grid.Col md={6} lg={2}></Grid.Col>
          <Grid.Col md={6} lg={4}>
            <SimpleGrid cols={3} classNames={styles.rotate}>
              <Group mt={50}>
                <Image
                  className={styles.rotate}
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group mb={50}>
                <Image
                  radius={'xl'}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group mt={50}>
                <Image
                  className={styles.rotate}
                  radius={'xl'}
                  src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group></Group>
              <Group>
                <Image
                  className={styles.rotate1}
                  radius={'xl'}
                  src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group></Group>
              <Group mb={50}>
                <Image
                  className={styles.rotate}
                  radius={'xl'}
                  src="https://dz2cdn1.dzone.com/storage/temp/4470473-ts-logo.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group mt={50}>
                <Image
                  radius={'xl'}
                  src="https://e7.pngegg.com/pngimages/221/377/png-clipart-php-php.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
              <Group mb={50}>
                <Image
                  className={styles.rotate}
                  radius={'xl'}
                  src="https://miro.medium.com/max/320/0*ObJbOfJnx4QIPUq9.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </Group>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
      <Space h={80} />
    </>
  )
}

export default Home
