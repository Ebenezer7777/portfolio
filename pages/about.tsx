/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Center,
  Divider,
  Grid,
  Image,
  Space,
  Text,
  Title,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import type { NextPage } from 'next'
import { FileDownload } from 'tabler-icons-react'
import styles from '../styles/Home.module.css'
import React from 'react'

const About: NextPage = () => {
  const mobile = useMediaQuery('(max-width: 866px)')
  return (
    <>
      <Space h={150} />

      <div className={styles.container}>
        <Title order={1}>About me</Title>
        <Space h={20} />
        <Grid>
          <Grid.Col md={6} lg={6}>
            <Divider size="xl" color={'#636262'} />
          </Grid.Col>
        </Grid>
        <Space h={30} />
        {mobile ? (
          <Grid justify={'center'}>
            <Grid.Col>
              <Image
                radius={10}
                height={270}
                alt="Photo Eben"
                src="https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
              />
              <Space h={20} />
              <Center>
                <div>
                  {' '}
                  <Button
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/cv_Ebenezer.pdf"
                    leftIcon={<FileDownload size={18} />}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: '#17325E',
                        border: 0,
                        height: 42,
                        paddingLeft: 20,
                        paddingRight: 20,

                        '&:hover': {
                          backgroundColor: theme.fn.darken('#17325E', 0.05),
                        },
                      },

                      leftIcon: {
                        marginRight: 15,
                      },
                    })}
                  >
                    Download CV
                  </Button>
                </div>
              </Center>
            </Grid.Col>

            <Grid.Col>
              <Text align="justify">
                My name is Ebenezer but you can call me Eben. I love creating
                stuffs that live on the internet, with a particular interest in
                interactive design and user experience.
              </Text>
              <Space h={30} />
              <Text align="justify">
                Born and raised in a small village in western Cameroon, I came
                to France about 3 years ago thanks to a competition that allowed
                me to continue my higher education. Currently a third-year
                engineering student at ENSIM, I developed a deep interest in building web
                applications, and I am currently preparing myself to do my entry
                to the tech scene.
              </Text>
              <Space h={30} />
              <Text align="justify">
                Whether it's software, web or mobile application, I strive to
                always apply best practices in my work to create amazing
                products that brings value. Well-organized and autonomous with a
                great attention to details, I am looking forward to work on
                interesting and challenging projects with positive people.
              </Text>
            </Grid.Col>
          </Grid>
        ) : (
          <Grid>
            <Grid.Col span={6}>
              <Text>
                my name is Ebenezer Lassem Abdoulaye, and my name is either
                Eben. I love creating objects that live on the internet, with a
                particular interest in interaction designs and user experience.
              </Text>
              <Space h={30} />
              <Text>
                Born and raised in a small village in western Cameroon, I came
                to France about 3 years ago thanks to a competition that allowed
                me to continue my higher education. Currently a third-year
                engineering student at ENSIM, I have developed a deep interest
                in building web applications, and I am currently preparing
                myself before entering the tech scene.
              </Text>
              <Space h={30} />
              <Text>
                I like to build stuff! Whether it's software, web or mobile
                applications, I strive to always apply engineering best
                practices in my work and create meaningful products that deliver
                powerful experiences. Well-organized and independent person with
                great attention to detail, I look forward to working on
                interesting and challenging projects with positive people!
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
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
              <Space h={50} />
              <Center>
                <div>
                  {' '}
                  <Button
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/cv_Ebenezer.pdf"
                    leftIcon={<FileDownload size={18} />}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: '#17325E',
                        border: 0,
                        height: 42,
                        paddingLeft: 20,
                        paddingRight: 20,

                        '&:hover': {
                          backgroundColor: theme.fn.darken('#17325E', 0.05),
                        },
                      },

                      leftIcon: {
                        marginRight: 15,
                      },
                    })}
                  >
                    Download CV
                  </Button>
                </div>
              </Center>
            </Grid.Col>
          </Grid>
        )}
      </div>
    </>
  )
}

export default About