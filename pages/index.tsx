import {
  ActionIcon,
  Button,
  Center,
  Collapse,
  SimpleGrid,
  Space,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import type { NextPage } from 'next'
import { useState } from 'react'
import { ChevronDown } from 'tabler-icons-react'
import CardIndexList from '../components/cardListIndex'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [opened, setOpen] = useState(false)
  const theme = useMantineTheme()
  return (
    <>
      <Space h={50} />
      <div className={styles.container}>
        <Title order={2}>Hey there</Title>
        <Space h={10} />
        <Title order={1}>My name is Ebenezer</Title>
        <Space h={10} />
        <Title order={2}>And i like build stuffs</Title>
        <Space h={10} />

        <Center>
          <Text size="xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            non. Nihil nobis perspiciatis facere sit voluptate delectus? Ipsum
            hic quam enim placeat tempore consequuntur et earum, ab architecto,
            illum atque. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Animi, eum nam veniam illum sequi praesentium incidunt ut,
            reiciendis eius quas dolores quos provident? Saepe, rem maxime. Nemo
            expedita dolores commodi, est animi eveniet dicta quos cupiditate,
            voluptatum odio facilis nesciunt. Rerum fugit vitae mollitia ullam
            molestias necessitatibus explicabo ducimus, cumque, et at temporibus
            reiciendis in voluptatibus, voluptatem dolorem repellendus!
            Voluptates blanditiis unde mollitia ullam repudiandae quia placeat
            tempora iure voluptatum autem illum temporibus ex quas assumenda est
            et, tempore consequatur provident! Ut at illum nemo fuga nobis,
            repellendus illo incidunt repudiandae sequi atque, vitae minus
            molestias reprehenderit eos assumenda minima.
          </Text>
        </Center>
      </div>
      <Space h={20} />
      <Center>
        <Text>Explorer</Text>
      </Center>
      <Space h={12} />
      <Center>
        <Button
          className={styles.animation_Bounce}
          color={'#17325E'}
          radius="xl"
          onClick={() => setOpen((o) => !o)}
        >
          <ActionIcon>
            <ChevronDown size={100} color={'#FFFF'} />
          </ActionIcon>
        </Button>
      </Center>
      <Space h={20} />

      <Collapse
        in={opened}
        transitionDuration={1000}
        transitionTimingFunction="ease-out"
      >
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
            { maxWidth: 980, cols: 4, spacing: 'sm' },
            { maxWidth: 800, cols: 3, spacing: 'sm' },
            { maxWidth: 755, cols: 2, spacing: 'xs' },
            { maxWidth: 500, cols: 2, spacing: 'xs' },
          ]}
        >
          <CardIndexList />
        </SimpleGrid>
      </Collapse>
    </>
  )
}

export default Home
