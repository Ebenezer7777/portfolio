/* eslint-disable react/no-unescaped-entities */
import {
  Blockquote,
  Center,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
} from '@mantine/core'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Space h={130} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Title order={2}>Hey there</Title>

            <Space h={10} />
            <Title order={1}>My name is Ebenezer</Title>
            <Space h={10} />
            <Title order={2}>And i like building stuffs</Title>
            <Space h={10} />

            <Center>
              <Text size="xl">
                I'm an aspiring software engineer with a particular interest for
                web development. Currently in the first year of my engineering
                cycle, I am looking for work-study and internship opportunities.
              </Text>
            </Center>
            <Space h={15} />
            <Center>
              <Blockquote style={{ color: '#fff' }} cite="– ">
                Life is like an npm install – you never know what you are going
                to get.
              </Blockquote>
            </Center>

            <Space h={20} />
          </Grid.Col>
          <Grid.Col md={6} lg={2}></Grid.Col>
          <Grid.Col md={6} lg={4}>
            <SimpleGrid cols={3} className={styles.rotate}>
              <Center>
                <Group mt={50}>
                  <Image
                    className={styles.rotate}
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </Group>
              </Center>
              <Center>
                <Group mb={50}>
                  <Image
                    radius={'xl'}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </Group>
              </Center>
              <Center>
                <Group mt={50}>
                  <Image
                    className={styles.rotate}
                    radius={'xl'}
                    src="https://www.malekal.com/wp-content/uploads/Java_logo.jpg"
                    alt=""
                    width={80}
                    height={80}
                  />
                </Group>
              </Center>
              <Center>
                <Group></Group>
              </Center>
              <Center>
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
              </Center>
              <Group></Group>
              <Center>
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
              </Center>
              <Center>
                <Group mt={50}>
                  <Image
                    radius={'xl'}
                    src="https://e7.pngegg.com/pngimages/221/377/png-clipart-php-php.png"
                    alt=""
                    width={80}
                    height={80}
                  />
                </Group>
              </Center>
              <Center>
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
              </Center>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
      <Space h={10} />
    </>
  )
}

export default Home
