import { Article,  ImgWrapper, Img, Button} from './styles'
import React, {useEffect, useRef, useState} from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({
  id, likes = 0, src }) => {

    const ref = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(function() {
      //console.log(ref.current)
      const observer = new window.IntersectionObserver(
        function(entries){
        const { isIntersecting } = entries[0]
        if (isIntersecting){
          console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(ref.current)

    }, [ref])

    
  return (
    <Article ref={ ref }>
      {
        show &&
        <>
          <a href={`/detail/${id} `} >
            <ImgWrapper>
                <Img src={DEFAULT_IMAGE} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{ likes} likes!
          </Button>
        </>
      }
    </Article>
  )
}