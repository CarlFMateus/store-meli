import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { View } from './View'

export const Search = () => {

  let [params] = useSearchParams()

  let searchParam = params.get('search')

  return (
    <View param={searchParam} />
  )
}
