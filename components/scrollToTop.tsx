import { useMediaQuery } from '@mantine/hooks'
import ScrollTo from './scrollTo'

const ScrollToTop = () => {
  const mobile = useMediaQuery('(max-width: 866px)')

  return(
  <div>
    {mobile ? <ScrollTo /> : <div></div>}
    
  </div>
  )}

export default ScrollToTop
