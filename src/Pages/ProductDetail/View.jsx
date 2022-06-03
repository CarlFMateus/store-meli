import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types';

import { BreadCrumb, Loading } from '../../components'
import { formatCurrency } from '../../utils'

import styles from './styles.module.scss'

export const View = ({ categories, loading, item }) => {
  return (
    <>
      {loading && <Loading />}

      {!loading &&
        <>
          <Helmet>
            <meta charSet='utf-8' />
            <title>{item.title}</title>
            <meta name='description' content={item.description} />
            <meta name='keywords' content={item.title} />
            <meta name='og:image' content={item.picture} />
            <meta name='og:title' content={item.title} />
            <meta name='og:description' content={item.description} />
          </Helmet>


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
        </>
      }
    </>
  )
}

View.propTypes = {
  categories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired
}