import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

import styles from './styles.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>Lo sentimos no se encuentra esta página.</h2>
      <Link to={routes.home}>Volver a Inicio</Link>
    </div>
  )
}
