import { Router } from 'express'

import itemsRouter from './items'

export function routerApi(app){
  const router = Router()

  app.use('/api', router)

  router.use('/items', itemsRouter)
}
