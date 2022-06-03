import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { routes } from '../../routes'
import { View } from './View'

export const Header = () => {
  const [inputSearch, setInputSearch] = useState('')
  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {
    const searchParam = params.get(routes.params.search)
    if (searchParam) {
      setInputSearch(searchParam)
    }
  }, [params])

  const handleChange = (e) => {
    setInputSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const value = inputSearch.trim()

    if (value && value !== '') {
      const param = encodeURI(value)
      navigate(`${routes.items}?${routes.params.search}=${param}`)
    }
  }

  return (
    <View
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      inputSearch={inputSearch}
    />
  )
}
