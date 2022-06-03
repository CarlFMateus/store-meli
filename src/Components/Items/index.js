import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { routes } from '../../routes'
import { formatCurrency } from '../../utils'

import shipping from '../../assets/ic_shipping@2x.png'
import styles from './styles.module.scss'

export const Items = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <div className={styles.containerItems}>
          {items.map(item => {
            return (
              <Link to={`${routes.items}/${item.id}`} key={`${item.id}`}>
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
          }
        </div>
      ) : (
        <div className={styles.notFound}>
          <h2>No se encontro este producto, por favor intenta buscar otro artículo</h2>
        </div>
      )}
    </>
  )
}

Items.propTypes = {
  items: PropTypes.array.isRequired
}
