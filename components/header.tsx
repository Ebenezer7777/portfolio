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
    <Paper
      p="xm"
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
              <Group>
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
                    <Link href="/skillsPage" passHref>
                      <Title className={styles.mainimage} order={2} mx={15}>
                        Skills
                      </Title>
                    </Link>
                    <Divider size="xl" my={10} color={'#636262'} />
                  </Grid.Col>
                  <Grid.Col>
                    <Link href="/ProjectsPage" passHref>
                      <Title className={styles.mainimage} order={2} mx={15}>
                        Project
                      </Title>
                    </Link>

                    <Divider size="xl" my={10} color={'#636262'} />
                  </Grid.Col>
                  <Grid.Col>
                    <Link href="/aboutPage" passHref>
                      <Title order={2} className={styles.mainimage} mx={15}>
                        About
                      </Title>
                    </Link>
                    <Divider size="xl" my={10} color={'#636262'} />
                  </Grid.Col>
                  <Grid.Col>
                    <Link href="/contactPage" passHref>
                      <Title order={2} className={styles.mainimage} mx={15}>
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
            <Group position="right" spacing={22}></Group>
          ) : (
            <Group position="right" spacing={22}>
              <Title
                color="#fff"
                align="center"
                m={25}
                style={{
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[7]
                      : '#fff',
                }}
              >
                Skills
              </Title>

              <Title
                color="#fff"
                align="center"
                m={25}
                style={{
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[7]
                      : '#fff',
                }}
              >
                Project
              </Title>

              <Title
                color="#fff"
                align="center"
                m={25}
                style={{
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[7]
                      : '#fff',
                }}
              >
                About
              </Title>

              <Title
                color="#fff"
                align="center"
                m={25}
                mr={20}
                style={{
                  color:
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[7]
                      : '#fff',
                }}
              >
                contact
              </Title>
            </Group>
          )}
        </Col>
      </Grid>
    </Paper>
  )
}

export default Nav
