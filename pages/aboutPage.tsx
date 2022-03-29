import {
  Center,
  Divider,
  Grid,
  Image,
  Space,
  Text,
  Title,
  Transition,
} from '@mantine/core'
import { truncate } from 'fs/promises'
import type { NextPage } from 'next'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const About: NextPage = (  ) => {
  return (
    <>
      <Space h={150} />
      <div className={styles.container}>
        <Header />
        <Space h={80} />
        <Title order={1}>About</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={5}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        <Grid>
          <Grid.Col md={6} lg={6}>
            <Transition
              mounted={true}
              transition="fade"
              duration={4000}
              timingFunction="ease"
            >
              {(styles) => (
                <div>
                  <Text ml={30} align="justify">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maiores placeat quod aperiam sunt beatae sed qui numquam
                    velit fugiat blanditiis, maxime accusamus, rerum est amet
                    quas dolorum ea! Mollitia aliquid nostrum laborum soluta
                    alias cupiditate iste doloremque nobis voluptate.
                    Aspernatur, sunt voluptatum. Enim perspiciatis architecto
                    provident repellat. Quae optio aspernatur eius repudiandae,
                    aut est distinctio commodi, error dolorum amet, harum
                    consequatur! Aliquid minima cupiditate deleniti deserunt
                    quisquam veritatis ab quos? Molestias eum ipsa numquam
                    assumenda non, atque similique amet temporibus ab quam
                    magnam id ea. Libero odio dicta nostrum. Quaerat assumenda
                    placeat expedita adipisci pariatur. Rem sed, ipsam at rerum
                    unde, nesciunt delectus, excepturi incidunt recusandae
                    dolorum eveniet? Hic incidunt molestiae, ut, quos laudantium
                    corrupti nulla laborum saepe rem cum, maxime quia
                    reprehenderit quod? Ipsum corporis, saepe sunt rerum
                    temporibus, totam quia, aperiam velit ipsam sequi alias. Sit
                    totam impedit ipsa consequuntur deserunt animi perferendis!
                    Libero excepturi perspiciatis officia quis soluta nemo
                    accusamus impedit magnam asperiores earum quisquam repellat
                    facere illo nesciunt voluptates, pariatur eos quia nostrum
                    voluptatibus, architecto quam dicta molestias itaque saepe!
                    Officia asperiores maiores veritatis ipsam qui corporis,
                    cupiditate similique nulla magni ab dolores, cum provident,
                    nostrum numquam in ullam omnis a sit odio harum earum.
                    Quisquam, a. Tempora obcaecati perferendis ab quasi, minus
                    assumenda esse distinctio doloribus eaque nobis tempore,
                    molestiae libero deserunt molestias quae aut aspernatur
                    facilis sed, explicabo aliquam commodi autem officiis
                    impedit? Nam aperiam error nulla blanditiis perspiciatis
                    autem molestiae cupiditate esse, distinctio eos eveniet illo
                    pariatur! Enim, explicabo iure? Dolor velit hic temporibus
                    facere labore fugit harum eos nemo aut molestias cupiditate
                    quasi incidunt asperiores, necessitatibus optio dicta
                    doloribus laboriosam cumque adipisci recusandae minus.
                    Doloribus tenetur, nulla dolorum ab commodi consequuntur
                    mollitia. Praesentium, vero similique saepe culpa itaque
                    porro quas officiis numquam, autem adipisci dignissimos
                    minima perspiciatis, quaerat quisquam nulla dolor voluptatem
                    eum quibusdam quod ea temporibus. Accusantium distinctio
                    cupiditate aut ipsum quae modi minus dignissimos nostrum eos
                    similique? Vitae nam sequi ad animi fu
                  </Text>
                </div>
              )}
            </Transition>
          </Grid.Col>
          <Grid.Col md={6} lg={6}>
            <Center>
              <div className={styles.imageborder}>
                <Image
                  className={styles.mainimage}
                  width={480}
                  height={270}
                  alt="Photo Eben"
                  src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
                />
              </div>
            </Center>
          </Grid.Col>
        </Grid>
      </div>
    </>
  )
}

export default About
