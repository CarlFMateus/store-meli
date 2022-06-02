import fetch from 'node-fetch'
import boom from '@hapi/boom'

import { mainRoutes } from './routes'

export const getItems = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serverUrl, apiUrl, routes } = mainRoutes

      const URL = `${serverUrl}${apiUrl}${routes.search}${query ? `?q=${query}` : ''}`
      const response = await fetch(URL)
      const data = await response.json()
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const getItemById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serverUrl, routes } = mainRoutes
      const response = await fetch(`${serverUrl}${routes.items}/${id}`)
      const responseDescription = await fetch(`${serverUrl}${routes.items}/${id}${routes.description}`)

      const info = await response.json()

      if (info?.error) throw boom.badRequest('Resource not found')

      const description = await responseDescription.json()

      if (description.error) throw boom.badRequest('Resource not found')

      resolve({ info, description })
    } catch (error) {
      reject(error)
    }
  })
}
