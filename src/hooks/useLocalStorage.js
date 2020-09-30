import React, {useState} from 'react'

export function useLocalStorage(key, initialValue){
  const [storeValue, setValue] = useState(() =>{
    try{
      const item = window.localStorage.getItem(key)==='true'
      return item !== null? JSON.parse(item) : initialValue
    }
    catch(err){
      console.log(err)
      return initialValue;
    }
  })

  const setLocalStorage = value => {
    try{

      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)

    }catch(err) {
      console.log(err)
    }
  }
  return [storeValue, setLocalStorage]
}