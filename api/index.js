import express from 'express'
import cors from 'cors'

import { routerApi } from './routes'
import { boomErrorHandler, errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(cors())

routerApi(app)

app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log(`🚀 🚀 🚀  Server http://localhost on port 3000`);
})

