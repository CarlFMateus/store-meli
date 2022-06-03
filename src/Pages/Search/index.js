import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { getItems } from '../../services'
import { View } from './View'

const initialState = { data: null, loading: true, error: null }

export const Search = () => {
  const [params] = useSearchParams()
  const searchParam = params.get('search')
  const [{ data, loading }, setInfo] = useState(initialState)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setInfo(initialState)
    const consumeService = async () => {
      try {
        const data = await getItems(searchParam)
        setCategories(data.categories)
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
    <View 
      loading={loading} 
      items={data} 
      categories={categories}
    />
  )
}
