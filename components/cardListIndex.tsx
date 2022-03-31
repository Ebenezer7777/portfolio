import { Space } from '@mantine/core'
import { Pages } from '../models/pages'
import CardIndex from './cardIndex'


const CardIndexList = () => {
  return (
    <>
      {Pages.map((pages, index) => (
        <CardIndex
          key={index}
          name={pages.name}
          url={pages.url}
          path={pages.path}
        />
      ))}
      <Space h={30} />
    </>
  )
}
export default CardIndexList
