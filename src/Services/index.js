import { mainRoutes } from './routes'

export const getItems = (param) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serverUrl, apiUrl, routes } = mainRoutes
      const URL = `${serverUrl}${apiUrl}${routes.items}${param ? `?q=${param}` : ''}`
      const response = await fetch(URL)
      const data = await response.json()

      if (data.error) throw new Error(data.error)

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export const getItem = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { serverUrl, apiUrl, routes } = mainRoutes
      const response = await fetch(`${serverUrl}${apiUrl}${routes.items}/${id}`)
      const data = await response.json()

      if (data.error) throw new Error(data.error)

      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
