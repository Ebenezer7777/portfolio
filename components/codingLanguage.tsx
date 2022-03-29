import { RingProgress, Space, Text } from '@mantine/core'
import styles from '../styles/Home.module.css'

interface skillsProps {
  name: string
  level: number
}

const Coding = (props: skillsProps) => {
  return (
    <div style={{ width: 200,  }}>
      
      <RingProgress
      className={styles.center}
        roundCaps
        sections={[{ value: props.level, color: '#00FFD1' }]}
        label={
          <Text color="#fff" weight={700} align="center" size="xl">
            {props.level}%
          </Text>
        }
      />
      <Text>{props.name}</Text>
      <Space h={30} />
    </div>
  )
}
export default Coding
