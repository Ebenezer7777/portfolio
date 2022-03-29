import { Progress, Space, Text,Center  } from '@mantine/core'

interface skillsProps {
  name: string
  level: number
}

const Frame = (props: skillsProps) => {

const level=`${props.level}%`
  return (
    <div style={{ width: 340,margin:10 }}>
      <Text>{props.name}</Text>
      
        <Progress 
        value={props.level} 
        label={level } 
        color= "#00FFD1"  
        size="xl" 
        radius="xl" 
        striped animate  
        />
        
      

      <Space h={30} />
    </div>
  )
}
export default Frame
