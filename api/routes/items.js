import fetch from 'node-fetch'

import { Router } from 'express'

const router = Router()

// Query ?q=televisor
router.get('/', async (req, res, next) => {
  try {
    const { q } = req.query

    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const data = await response.json()

    const items = data.results.splice(0, 4)

    const categories = data.filters.length > 0
      ? data.filters[0].values[0].path_from_root.map((item) => item.name)
      : [q]

    const dataToSend = {
      author: {
        name: 'Carl',
        lastname: 'Mateus'
      },
      categories,
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.prices.prices[0].currency_id,
          amount: item.prices.prices[0].amount,
          decimals: item.prices[0]?.decimals || 0, // TODO: No se encuentra en la documentación
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }))
    }

    return res.status(200).json(dataToSend)
  } catch (error) {
    next(error)
  }
})

// By ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const responseDescription = await fetch(`https://api.mercadolibre.com/items/${id}/description`)

    const data = await response.json()
    const dataDescription = await responseDescription.json()

    const dataToSend = {
      author: {
        name: 'Carl',
        lastname: 'Mateus'
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          amount: data.price,
          currency: data.currency_id,
          decimals: data?.decimals || 0
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: dataDescription.plain_text
      }
    }    

    return res.status(200).json(dataToSend)

  } catch (error) {
    next(error)
  }
})

export default router
