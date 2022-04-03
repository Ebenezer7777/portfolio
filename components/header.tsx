import {
  Burger,
  Col,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useClickOutside, useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Nav: React.FC = () => {
  const mobile = useMediaQuery('(max-width: 866px)')

  const [opened, setOpened] = useState(false)
  const clickOutsideRef = useClickOutside(() => setOpened(false))
  const theme = useMantineTheme()
  const pages = [
    ['Home', '/'],
    ['Skills', '/skills'],
    ['Projects', '/projects'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]

  return (
    <div className={styles.fixed}>
      <Paper
        shadow="xs"
        style={{
          height: 80,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : '#17325E',
        }}
      >
        <Grid justify="center">
          {mobile ? (
            <div>
              <Col span={12}>
                <Group position="right">
                  <Menu
                    transition="scale-x"
                    transitionDuration={100}
                    transitionTimingFunction="ease"
                    style={{ backgroundColor: '#17325E' }}
                    control={
                      <Burger
                        mt={10}
                        opened={opened}
                        m={10}
                        size={'lg'}
                        color="#fff"
                        onClick={() => setOpened((o) => !o)}
                      />
                    }
                  >
                    {pages.map(([name, href]) => (
                      <div className={styles.container} key={name}>
                        <Menu.Item
                          sx={() => ({
                            backgroundColor: '#17325E',
                            '&:hover': {
                              backgroundColor: '#00FFD1',
                            },
                          })}
                          onClick={() => setOpened((o) => !o)}
                        >
                          {' '}
                          <Link href={href} passHref>
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
                              {name}
                            </Title>
                          </Link>
                        </Menu.Item>
                        <Divider size="xl" my={10} color={'#0000'} />
                      </div>
                    ))}
                  </Menu>
                </Group>
              </Col>
            </div>
          ) : (
            <Col span={12}>
              {!mobile && (
                <Group position="right" spacing={22}>
                  {pages.map(([name, href]) => (
                    <Link href={href} passHref key={name}>
                      <Title
                        className={styles.link}
                        color="#fff"
                        align="center"
                        m={25}
                        order={3}
                        style={{
                          color:
                            theme.colorScheme === 'dark'
                              ? theme.colors.gray[7]
                              : '#fff',
                        }}
                      >
                        {name}
                      </Title>
                    </Link>
                  ))}
                </Group>
              )}
            </Col>
          )}
        </Grid>
      </Paper>
    </div>
  )
}

export default Nav
