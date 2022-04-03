import { Divider, Grid, SimpleGrid, Space, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import CodingList from '../components/codingList'
import FrameList from '../components/frameworkList'
import styles from '../styles/Home.module.css'
const Skills: NextPage = () => {
  return (
    <>
      <Space h={150} />
      <div className={styles.container}>
        <Title  order={1}>My Skills</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        <Text>Here are some of the technologies that I am working </Text>

        <Space h={30} />
        <Title mx={10} color="#00FFD1" order={2}>
          Framework
        </Title>
        <Space h={30} />

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
            { maxWidth: 501, cols: 1, spacing: 'xs' },
          ]}
        >
          <FrameList />
        </SimpleGrid>

        <Space h={30} />
        <Title mx={10} color="#00FFD1" order={2}>
          Coding Language
        </Title>
        <Space h={30} />
        <SimpleGrid
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          cols={4}
          spacing="md"
          breakpoints={[
            { maxWidth: 980, cols: 5, spacing: 'sm' },
            { maxWidth: 800, cols: 3, spacing: 'sm' },
            { maxWidth: 755, cols: 2, spacing: 'xs' },
            { maxWidth: 500, cols: 1, spacing: 'xs' },
          ]}
        >
          <CodingList />
        </SimpleGrid>
      </div>
      <Space h={80} />
    </>
  )
}

export default Skills
