import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { View } from './View'

export const Layout = (props) => {
  const [inputSearch, setInputSearch] = useState('')
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const searchParam = params.get('search')
    if (searchParam) {
      setInputSearch(searchParam)
    }
  }, [params])

  const handleChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const param = encodeURI(inputSearch)
    navigate(`/items?search=${param}`)
  }

  return (
    <View
      {...props}
      handleChange={handleChange}
      inputSearch={inputSearch}
      handleSubmit={handleSubmit}
    />
  )
}