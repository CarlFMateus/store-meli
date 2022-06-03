import React from 'react'
import PropTypes from 'prop-types';

import styles from './styles.module.scss'

export const BreadCrumb = ({ categories }) => {
  return (
    <>
      {categories.length > 0 && (
        <div className={styles.breadcrumb}>
          Inicio {categories.map((item, index) => (
            <>
              {' > '} 
              <span 
                className={index === categories.length - 1 ? styles.active : '' }>
                {item}
              </span>
            </>
          ))}
        </div>
      )}
    </>
  )
}

BreadCrumb.propTypes = {
  categories: PropTypes.array.isRequired
}
