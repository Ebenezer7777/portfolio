import {
  Avatar,
  Divider,
  Grid,
  List,
  SimpleGrid,
  Space,
  Text,
  Timeline,
  Title,
  UnstyledButton,
} from '@mantine/core'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Sun } from 'tabler-icons-react'
import CardList from '../components/cardList'
import { useWindowEvent } from '@mantine/hooks';
import styles from '../styles/Home.module.css'



const ProjectList: NextPage = () => {
  const handler = (event: any) => console.log(event);
  const [state, setState] = useState(true)
  useWindowEvent('keydown', handler);
  return (
    <>
        <Space h={150} />
      <div className={styles.container}>
        <Title order={1}>My Experience</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />

        <Grid justify="center" align="center">
          <Grid.Col span={3}>
            {state ? ( // if state is true then show this button  else hide it  (state is true by default)
              <UnstyledButton
                onClick={() => setState(() => true)}
                style={{
                  color: '#00FFD1',
                }}
              >
                <Title order={2}>Personal Projects</Title>
              </UnstyledButton>
            ) : (
              <UnstyledButton
                onClick={() => setState(() => true)}
                style={{
                  color: '#fff',
                }}
              >
                <Title order={2}>Personal Projects</Title>
              </UnstyledButton>
            )}
            <Divider
              size="xl"
              sx={(theme) => ({
                backgroundColor: '#00FFD1',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            {!state ? (
              <UnstyledButton
                onClick={() => setState(() => false)}
                style={{
                  color: '#00FFD1',
                }}
              >
                <Title order={2}>Work Experience</Title>
              </UnstyledButton>
            ) : (
              <UnstyledButton
                onClick={() => setState(() => false)}
                style={{
                  color: '#fff',
                }}
              >
                <Title order={2}>Work Experience</Title>
              </UnstyledButton>
            )}
            <Divider
              size="xl"
              sx={(theme) => ({
                backgroundColor: '#00FFD1',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            />
          </Grid.Col>
        </Grid>
        {state ? (
          <>
            <Space h={40} />
            <Text>Here are some projects i have been working on.</Text>
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
          </>
        ) : (
          <div className={styles.center1}>
            <Space h={70} />
            <Timeline color="#fff">
              <Timeline.Item
                title={
                  <>
                    <Title order={2} style={{ color: '#00FFD1' }}>
                      Express Union , Web Developer Intern
                    </Title>
                    <Space h={10}/>
                  </>
                }
                bulletSize={50}
                bullet={
                  <Avatar
                    size={22}
                    radius="xl"
                    src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                  />
                }
              >
                <List withPadding center spacing="lg" style={{ color: '#fff' }}>
                  <List.Item>
                  Maintenance of the company website
                  </List.Item>
                  <List.Item>Added new functionality</List.Item>

                </List><Space h={50} />
                <Divider size="xl" style={{ color: '#fff' }} />
              </Timeline.Item>
              
              <Timeline.Item
                title={
                  <>
                    <Title order={2} style={{ color: '#00FFD1' }}>
                      JEV , Mobile App Developer intern
                    </Title>
                    
                  </>
                }
                bulletSize={50}
                bullet={<Sun size={14} />}
              >
                <List withPadding center spacing="lg" style={{ color: '#fff' }}>
                  <List.Item>
                    Clone or download repository from GitHub
                  </List.Item>
                  <List.Item>Install dependencies with yarn</List.Item>
                  <List.Item>
                  install Native Base design library
                  </List.Item>
                  <List.Item>
                  To start developing the application front end
                  </List.Item>
                  <List.Item>Submit a pull request once you are done</List.Item>
                </List>
              </Timeline.Item>
              <Divider
                size="xl"
                sx={(theme) => ({
                  backgroundColor: '#00FFD1',
                  '&:hover': {
                    backgroundColor: '#00FFD1',
                  },
                })}
              />
              <Timeline.Item></Timeline.Item>
            </Timeline>
          </div>
        )}
      </div>
    </>
  )
}

export default ProjectList
