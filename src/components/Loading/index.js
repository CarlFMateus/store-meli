import React from 'react'

import styles from './styles.module.scss'

export const Loading = () => {
  return (
    <div className={styles.containerLoading}>
      <h2>Te ofrecemos lo mejor en productos...</h2>
      <div className={styles.spinner}></div>
    </div>
  )
}
