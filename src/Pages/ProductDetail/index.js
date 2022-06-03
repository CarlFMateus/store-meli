import React from 'react'
import { useParams } from 'react-router-dom'
import { View } from './View'

export const ProductDetail = () => {
  const { id } = useParams()

  return (
    <View param={id} />
  )
}
