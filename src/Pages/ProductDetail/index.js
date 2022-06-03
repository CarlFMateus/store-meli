import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../services'
import { View } from './View'

const initialState = { data: {}, loading: true, error: null }

export const ProductDetail = () => {
  const [{ data, loading, error }, setInfo] = useState(initialState)
  const [categories, setCategories] = useState([])
  const { id } = useParams()

  useEffect(() => {
    setInfo(initialState)
    const consumeService = async () => {
      try {
        const data = await getItem(id)
        setCategories([ data.item.id, data.item.title ])
        setInfo({
          data: data.item,
          loading: false,
          error: null
        })
      } catch (error) {
        setInfo({
          data: {},
          loading: false,
          error,
        })
      }
    }

    consumeService()
  }, [id])

  return (
    <View 
      item={data} 
      loading={loading} 
      categories={categories} 
      error={error}
    />
  )
}
