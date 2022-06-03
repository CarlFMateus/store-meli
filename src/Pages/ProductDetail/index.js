import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../Services'
import { View } from './View'

const initialState = { data: null, loading: true, error: null }

export const ProductDetail = () => {
  const [{ data }, setInfo] = useState(initialState)
  const { id } = useParams()

  useEffect(() => {
    setInfo(initialState)
    const consumeService = async () => {
      try {
        const data = await getItem(id)
        console.log('data', data)
        setInfo({
          data: data.item,
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
  }, [id])
  
  return (
    <View param={id} />
  )
}
