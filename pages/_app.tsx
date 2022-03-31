import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import Nav from '../components/header'
import ScrollToTop from '../components/scrollToTop'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider theme={{ fontFamily: 'Poppins',fontSizes: '1.5rem', headings: { fontFamily: 'Poppins' }, }}>
     <Nav />
     <ScrollToTop/>
      <Component {...pageProps} />
     
    </MantineProvider>
  )
}

export default MyApp
