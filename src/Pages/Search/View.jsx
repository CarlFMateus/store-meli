import React from 'react'
import { BreadCrumb, Items } from '../../components'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

export const View = ({ categories, loading, items }) => {
  return (
    <>
      <div className={styles.mainContainerSearch}>
        {loading && 'Loading ...'}

        {!loading && (
          <>
            <BreadCrumb categories={categories} />
            <Items items={items} />
          </>
        )}
      </div>
    </>
  )
}

View.propTypes = {
  categories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
}
