import React from 'react'

import { PhotoCard  } from '../PhotoCard'

export const ListOfPhotoCards = () =>{
  return (
    [1,2,3,5,6,7 ].map(id => <PhotoCard key={id} />)
  )
}