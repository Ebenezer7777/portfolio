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
import { useMediaQuery, useWindowEvent } from '@mantine/hooks';
import styles from '../styles/Home.module.css'
import Transition from '../components/transition'



const ProjectList: NextPage = () => {

  const mobile = useMediaQuery('(max-width: 866px)')
  const [state, setState] = useState(true)

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
          {mobile ? (
            <>
              <Grid.Col span={6}>
                {state ? ( // if state is true then show this button  else hide it  (state is true by default)
                  <UnstyledButton
                    onClick={() => setState(() => true)}
                    style={{
                      color: '#00FFD1',
                    }}
                  >
                    <Title order={3}>Projects</Title>
                  </UnstyledButton>
                  
                ) : (
                  <UnstyledButton
                    onClick={() => setState(() => true)}
                    style={{
                      color: '#fff',
                    }}
                  >
                    <Title order={3}>Projects</Title>
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
              <Space h={8}/>
              <Grid.Col span={6}>
                {!state ? (
                  <UnstyledButton
                    onClick={() => setState(() => false)}
                    style={{
                      color: '#00FFD1',

                    }}
                  >
                    <Title order={3}>Experience</Title>
                  </UnstyledButton>
                ) : (
                  <UnstyledButton 
                    onClick={() => setState(() => false)}
                    style={{
                      color: '#fff',
                    }}
                  >
                    <Title order={3}>Experience</Title>
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
            </>
          ) : (
            <>
              <Grid.Col span={3}>
                {state ? ( // if state is true then show this button  else hide it  (state is true by default)
                  <UnstyledButton 
                  className={styles.link}
                    onClick={() => setState(() => true)}
                    style={{
                      color: '#00FFD1',
                    }}
                  >
                    <Title order={2}>Personal Projects</Title>
                  </UnstyledButton>
                ) : (
                  <UnstyledButton
    
                  className={styles.link}
                    onClick={() => setState(() => true)}
                    style={{
                      color: '#fff',
                    }}
                  >
                    <Title order={2}>Personal Projects</Title>
                  </UnstyledButton>
                )}
               
              </Grid.Col>

              <Grid.Col span={3}>
                {!state ? (
                  <UnstyledButton
                  className={styles.link}
                    onClick={() => setState(() => false)}
                    style={{
                      color: '#00FFD1',
                    }}
                  >
                    <Title order={2}>Work Experience</Title>
                  </UnstyledButton>
                ) : (
                  <UnstyledButton
                  className={styles.link}
                    onClick={() => setState(() => false)}
                    style={{
                      color: '#fff',
                    }}
                  >
                    <Title order={2}>Work Experience</Title>
                  </UnstyledButton>
                )}
                
              </Grid.Col>
            </>
          )}
        </Grid>
        {state ? (
          <Transition>
            <Space h={40} />
            <Text>Here are some projects i have been working on.</Text>
            <Space h={30} />
            <SimpleGrid
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center', // 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly
                alignItems: 'stretch', // 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline' 
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
          </Transition>
        ) : (
          <Transition>
          <div className={styles.center1} style={{ maxWidth: 700, margin: 'auto' }}>
            <Space h={70} />
            <Timeline color="#fff">
              <Timeline.Item
                title={
                  <>
                    <Title order={2} style={{ color: '#00FFD1' }}>
                      Express Union , Web Developer Intern
                    </Title>
                    <Space h={10} />
                  </>
                }
                bulletSize={50}
                bullet={
                  <Avatar
                    size={50}
                    radius="xl"
                    src="
                    https://media.licdn.com/dms/image/C4E0BAQEYntMnzc5rJw/company-logo_200_200/0/1643802334918?e=2147483647&v=beta&t=LPgbXuRBYeUW5PbFjSyt7dvSLQlmG9UE-m-AKsngSEc"
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
                bullet={
                  <Avatar 
                  size={50} 
                  radius="xl"
                  src="https://pbs.twimg.com/profile_images/1260629790169718788/JfDlkiIJ_400x400.jpg"
                  />}
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
          </Transition>
        )}
      </div>
    </>
  )
}

export default ProjectList
