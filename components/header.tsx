import { ActionIcon, Divider, Grid, Title } from '@mantine/core'
import Link from 'next/link'
import { ArrowBack } from 'tabler-icons-react'
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <>
      <Grid>
        <Grid.Col md={8} lg={4}>
          <Link href="/" passHref>
            <ActionIcon
              className={styles.mainimage}
              mx={50}
              radius={30}
              size={100}
              sx={() => ({
                backgroundColor: 'none',
                '&:hover': {
                  backgroundColor: '#00FFD1',
                },
              })}
            >
              <ArrowBack size={100} color={'#FFFF'} />
            </ActionIcon>
          </Link>
        </Grid.Col>
        <Grid.Col md={8} lg={2}>
          <Link href="/skillsPage" passHref>
            <Title className={styles.mainimage} order={2} mx={15}>
              Skills
            </Title>
          </Link>
          <Divider size="xl" my={10} color={'#636262'} />
        </Grid.Col>
        <Grid.Col md={8} lg={2}>
          <Link href="/ProjectsPage" passHref>
            <Title className={styles.mainimage} order={2} mx={15}>
              Project
            </Title>
          </Link>

          <Divider size="xl" my={10} color={'#636262'} />
        </Grid.Col>
        <Grid.Col md={8} lg={2}>
          <Link href="/aboutPage" passHref>
            <Title order={2} className={styles.mainimage} mx={15}>
              About
            </Title>
          </Link>
          <Divider size="xl" my={10} color={'#636262'} />
        </Grid.Col>
        <Grid.Col md={8} lg={2}>
          <Link href="/contactPage" passHref>
            <Title order={2} className={styles.mainimage} mx={15} >
              Contact
            </Title>
          </Link>
          <Divider size="xl" my={10} color={'#636262'} />
        </Grid.Col>
      </Grid>
    </>
  )
}
export default Header
