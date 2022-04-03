import {
  ActionIcon,
  Burger,
  Col,
  Collapse,
  Divider,
  Grid,
  Group,
  Paper,
  Title,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import { useClickOutside, useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowBack } from 'tabler-icons-react'
import styles from '../styles/Home.module.css'

const Nav: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 866px)')

  const [opened, setOpened] = useState(false)
  const clickOutsideRef = useClickOutside(() => setOpened(false))
  const theme = useMantineTheme()

  return (
    <div className={styles.fixed} >
      <Paper
     
        shadow="xs"
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : '#17325E',
        }}
      >
        <Grid align="center">
          {mobile ? (
            <Col span={12}>
              <div>
                <Group position="right">
                  <Burger
                    mt={20}
                    opened={opened}
                    m={10}
                    size={'xl'}
                    color="#fff"
                    onClick={() => setOpened((o) => !o)}
                    ref={clickOutsideRef}
                  />
                </Group>

                <Collapse in={opened} className={styles.container}>
                  <Grid justify="center">
                    <Grid.Col>
                      <Link href="/" passHref>
                        <Title
                          order={2}
                          mx={15} 
                          style={{
                            color:
                              theme.colorScheme === 'dark'
                                ? theme.colors.gray[7]
                                : '#fff',
                          }}
                        >
                          Home
                        </Title>
                      </Link>
                      <Divider size="xl" my={10} color={'#636262'} />
                    </Grid.Col>
                    <Grid.Col>
                      <Link href="/skillsPage" passHref>
                        <Title
                          order={2}
                          mx={15}
                          style={{
                            color:
                              theme.colorScheme === 'dark'
                                ? theme.colors.gray[7]
                                : '#fff',
                          }}
                        >
                          Skills
                        </Title>
                      </Link>
                      <Divider size="xl" my={10} color={'#636262'} />
                    </Grid.Col>
                    <Grid.Col>
                      <Link href="/ProjectsPage" passHref>
                        <Title
                          order={2}
                          mx={15}
                          style={{
                            color:
                              theme.colorScheme === 'dark'
                                ? theme.colors.gray[7]
                                : '#fff',
                          }}
                        >
                          Project
                        </Title>
                      </Link>

                      <Divider size="xl" my={10} color={'#636262'} />
                    </Grid.Col>
                    <Grid.Col>
                      <Link href="/aboutPage" passHref>
                        <Title
                          order={2}
                          mx={15}
                          style={{
                            color:
                              theme.colorScheme === 'dark'
                                ? theme.colors.gray[7]
                                : '#fff',
                          }}
                        >
                          About
                        </Title>
                      </Link>
                      <Divider size="xl" my={10} color={'#636262'} />
                    </Grid.Col>
                    <Grid.Col>
                      <Link href="/contactPage" passHref>
                        <Title
                          order={2}
                          mx={15}
                          style={{
                            color:
                              theme.colorScheme === 'dark'
                                ? theme.colors.gray[7]
                                : '#fff',
                          }}
                        >
                          Contact
                        </Title>
                      </Link>
                      <Divider size="xl" my={10} color={'#636262'} />
                    </Grid.Col>
                  </Grid>
                </Collapse>
              </div>
            </Col>
          ) : (
            <Col span={1}>
              <Link href="/" passHref>
                <Tooltip label="Homepage" p={22}>
                  <ActionIcon
                    mx={50}
                    radius={10}
                    size={'xl'}
                    sx={() => ({
                      backgroundColor: 'none',
                      '&:hover': {
                        backgroundColor: '#00FFD1',
                      },
                    })}
                  >
                    <ArrowBack size={100} color={'#FFFF'} />
                  </ActionIcon>
                </Tooltip>
              </Link>
            </Col>
          )}

          <Col span={11}>
            {mobile ? (
             null
            ) : (
              <Group position="right" spacing={22}>
                <Link href={'/skillsPage'} passHref>
                  <Title
                    className={styles.link}
                    color="#fff"
                    align="center"
                    m={25}
                    order={2}
                    style={{
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : '#fff',
                    }}
                  >
                    Skills
                  </Title>
                </Link>
                <Link href={'/ProjectsPage'} passHref>
                  <Title
                    className={styles.link}
                    color="#fff"
                    align="center"
                    m={25}
                    order={2}
                    style={{
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : '#fff',
                    }}
                  >
                    Project
                  </Title>
                </Link>
                <Link href={'/aboutPage'} passHref>
                  <Title
                    className={styles.link}
                    color="#fff"
                    align="center"
                    m={25}
                    order={2}
                    style={{
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : '#fff',
                    }}
                  >
                    About
                  </Title>
                </Link>
                <Link href={'/contactPage'} passHref>
                  <Title
                    className={styles.link}
                    color="#fff"
                    align="center"
                    m={25}
                    order={2}
                    mr={20}
                    style={{
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.gray[7]
                          : '#fff',
                    }}
                  >
                    Contact
                  </Title>
                </Link>
              </Group>
            )}
          </Col>
        </Grid>
      </Paper>
    </div>
  )
}

export default Nav
