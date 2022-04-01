import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Transition=({ children }:{children: React.ReactNode})=>{
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeOut')
  useEffect(() => {
    setTransitionStage('fadeIn')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fadeOut')
  }, [children, setDisplayChildren, displayChildren])

  return (
    <div
      onTransitionEnd={() => {
        if (transitionStage === 'fadeOut') {
          console.log('fading out')
          setDisplayChildren(children)
          setTransitionStage('fadeIn')
        }
      }}
      className={`${styles.content} ${styles[transitionStage]}`}
    >
      {displayChildren}
    </div>
  )
}
 export default Transition