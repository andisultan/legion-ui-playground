import React from 'react'
import { Avatar } from 'legion-ui'
import Site from 'components/site'

const PageAvatar = () => {
  return (
    <Site title="Avatar">
      <div className="p-1 flex flex-wrap">
        <div className="w-1/3 p-2">
          <Avatar size="small" src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />
        </div>
        <div className="w-1/3 p-2">
          <Avatar size="medium" src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />
        </div>
        <div className="w-1/3 p-2">
          <Avatar size="large" src="https://rickandmortyapi.com/api/character/avatar/192.jpeg" />
        </div>
      </div>
    </Site>
  )
}

export default PageAvatar