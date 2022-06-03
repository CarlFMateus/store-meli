import React from 'react'
import { Link } from 'react-router-dom'

import { formatCurrency } from '../../utils'

import shipping from '../../Assets/ic_shipping@2x.png'
import styles from './styles.module.scss'


export const Items = ({ items }) => {
  return (
    <div className={styles.containerItems}>
      {items.length > 0 ?
        items.map(item => {
          return (
            <Link to={`/items/${item.id}`} key={`${item.id}`}>
              <div className={styles.cardItem}>
                <img src={item.picture} alt={item.title} />
                <div className={styles.infoItem1}>
                  <div className={styles.infoPrice}>
                    <span className={styles.price}>
                      ${' '}{formatCurrency.format(item.price.amount)}
                    </span>
                    {item.free_shipping && <img src={shipping} alt='Free' />}
                  </div>
                  <p className={styles.title}>{item.title}</p>
                </div>
                <div className={styles.infoItem2}>
                  <span className={styles.addressState}>{item.address.state}</span>
                </div>
              </div>
            </Link>
          )
        })
        : (
          <div className={styles.notFound}>
            No se encontro este producto, por favor intenta buscar articulo
          </div>
        )
      }
    </div>
  )
}
