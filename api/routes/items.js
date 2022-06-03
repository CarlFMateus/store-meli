import { Router } from 'express'

import { getItemById, getItems } from '../services'
import { AUTHOR } from '../utils/constants'

const router = Router()

// Query ?q=televisor
router.get('/', async (req, res, next) => {
  try {
    const { q } = req.query
    const query = encodeURI(q)

    const data = await getItems(query)
  
    const items = data.results.splice(0, 4)

    const isValidQuery = q && q !== 'null' && q !== 'undefined' 

    const categories = data.filters.length > 0
      ? data.filters[0].values[0].path_from_root.map((item) => item.name)
      : isValidQuery ? [q] : []

    const dataToSend = {
      author: AUTHOR,
      categories,
      items: isValidQuery ? items.map((item) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.prices.prices[0].currency_id,
          amount: item.prices.prices[0].amount,
          decimals: item.prices[0]?.decimals || 0, // TODO: No se encuentra en la documentación
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: {
          state: item.address.state_name
        }
      })) : []
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
    const { info, description } = await getItemById(id)

    const dataToSend = {
      author: AUTHOR,
      item: {
        id: info.id,
        title: info.title,
        price: {
          amount: info.price,
          currency: info.currency_id,
          decimals: info?.decimals || 0
        },
        picture: info.pictures?.[0]?.secure_url || info.thumbnail,
        condition: info.condition,
        free_shipping: info.shipping.free_shipping,
        sold_quantity: info.sold_quantity,
        description: description.plain_text
      }
    }    

    return res.status(200).json(dataToSend)
  } catch (error) {
    next(error)
  }
})

export default router
