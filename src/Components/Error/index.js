import React from 'react'

import styles from './styles.module.scss'

export const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h2>Ups... Ocurrio un problemas en nuestros servicios intenta más tarde.</h2>
    </div>
  )
}
