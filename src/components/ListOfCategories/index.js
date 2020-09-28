import React, { useState, useEffect } from 'react'
import { Category } from '../category'

import { List, Item  } from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () =>{
  const [categories, setCategories] = useState(mockCategories)

  useEffect(function(){
    
  })

  return (
    <List>
      {
        categories.map(categ => <Item key={ categ.id } ><Category {...categ} /></Item>)
      }
    </List>
  )
}


