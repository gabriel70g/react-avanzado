import React from 'react'
import { Category } from '../category'

import { List, Item  } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () =>{

  return (
    <List>
      {
        categories.map(categ => <Item key={ categ.id } ><Category {...categ} /></Item>)
      }
    </List>
  )
}


