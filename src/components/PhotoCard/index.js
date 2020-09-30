import { Article,  ImgWrapper, Img, Button} from './styles'
import React, {useEffect, useRef, useState} from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({ id, likes = 0, src }) => {
    const [show, ref] = useNearScreen()
    const key = `like${id}`
    const [like, setLiked] = useLocalStorage(key, false)
    const Icon = like? MdFavorite: MdFavoriteBorder

  return (
    <Article ref={ ref }>
      {
        show &&
        <>
          <a href={`/detail/${id} `} >
            <ImgWrapper>
                <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={ ()=> setLiked(!like) }>
            <Icon size='32px' />{ likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}