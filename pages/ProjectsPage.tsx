import { Divider, Grid, ScrollArea, SimpleGrid, Space, Text, Title } from '@mantine/core'
import type { NextPage } from 'next'
import CardList from '../components/cardList'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const ProjectList: NextPage = () => {
  return (
    <ScrollArea style={{ height: 1000 }} scrollbarSize={2}>
      <Space h={50} />
      <div className={styles.container}>
  
        <Space h={80} />
        <Title order={1}>My Experience</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        <Text>Here are some of the technologies that I am working </Text>
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
            { maxWidth: 980, cols: 4 ? 4 : 3, spacing: 'sm' },
            { maxWidth: 800, cols: 3 ? 3 : 2, spacing: 'sm' },
            { maxWidth: 755, cols: 2 ? 2 : 1, spacing: 'xs' },
            { maxWidth: 500, cols: 2 ? 1 : 1, spacing: 'xs' },
          ]}
        >
          <CardList />
        </SimpleGrid>
      </div>
      <Space h={80} />
    </ScrollArea>
  )
}

export default ProjectList
