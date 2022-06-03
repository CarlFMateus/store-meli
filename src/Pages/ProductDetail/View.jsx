import React from 'react'
import { Layout } from '../../Components/Layout'

export const View = ({ param }) => {
  return (
    <Layout>
      <div>ProductDetail {param}</div>
    </Layout>
  )
}
