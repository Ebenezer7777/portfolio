import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Nav from '../components/header'
import ScrollToTop from '../components/scrollToTop'
import Transition from '../components/transition'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.location.reload();
    }

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Poppins',
        fontSizes: '1.5rem',
        headings: { fontFamily: 'Poppins' },
      }}
    >
      <Nav/>
      <ScrollToTop/>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </MantineProvider>
  )
}

export default MyApp
