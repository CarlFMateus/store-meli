import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getItems } from '../../Services'
import { View } from './View'

const initialState = { data: null, loading: true, error: null }

export const Search = () => {
  const [params] = useSearchParams()
  const searchParam = params.get('search')
  const [{ data }, setInfo] = useState(initialState)

  useEffect(() => {
    setInfo(initialState)
    const consumeService = async () => {
      try {
        const data = await getItems(searchParam)
        setInfo({
          data: data.items,
          loading: false,
          error: null
        })
      } catch (error) {
        console.error('ERROR', error)
        setInfo({
          data: null,
          loading: false,
          error: null
        })
      }
    }

    consumeService()
  }, [searchParam])

  return (
    <View param={searchParam} />
  )
}
