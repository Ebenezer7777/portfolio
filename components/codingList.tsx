import { Space } from '@mantine/core'
import { Skills } from '../models/skills'
import Coding from './codingLanguage'

const CodingList = () => {
  return (
    <>
      {Skills.map((skill, index) => (
        <Coding key={index} name={skill.name} level={skill.level} />
      ))}
      <Space h={30} />
    </>
  )
}
export default CodingList
