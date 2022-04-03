import { Space } from '@mantine/core'
import Cards from './card'
import { Projects } from '../models/projects'

const CardList = () => {
  return (
    <>
      {Projects.map((project, index) => (
        <Cards
          key={index}
          name={project.name}
          description={project.description}
          language={project.Language}
          href={project.Href}
        />
      ))}
      <Space h={30} />
    </>
  )
}
export default CardList
