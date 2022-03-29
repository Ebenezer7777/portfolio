import { Space } from '@mantine/core'
import { Frameworks } from '../models/skills'
import Frame from './framework'

const FrameList = () => {
  return (
    <>
      {Frameworks.map((skill, index) => (
        <Frame key={index} name={skill.name} level={skill.level} />
      ))}
      <Space h={30} />
    </>
  )
}
export default FrameList
