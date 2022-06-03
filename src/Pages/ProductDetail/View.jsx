import React from 'react'
import { BreadCrumb, Layout } from '../../Components'
import { formatCurrency } from '../../utils'

import styles from './styles.module.scss'

export const View = ({ categories, loading, item }) => {
  if (loading) return 'Loading...'

  return (
    <Layout>
      <BreadCrumb categories={categories} />

      <div className={styles.mainContainerDetail}>
        <div className={styles.infoContainer}>
          <img src={item.picture} alt={item.title} />
          <div className={styles.descriptionContainer}>
            <span className={styles.title}>
              Descripción del producto
            </span>
            <span className={styles.description}>{item.description}</span>
          </div>
        </div>

        <div className={styles.infoDetail}>
          <span className={styles.soldQuantity}>
            {item.condition === 'new' ? 'Nuevo' : 'Antiguo'} - {item.sold_quantity} vendidos
          </span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.price}>
            ${' '} {formatCurrency.format(item.price.amount)}
          </span>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </div>
    </Layout>
  )
}
