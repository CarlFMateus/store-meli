import React from 'react'

import logo from '../../assets/logo_meli.png'

import styles from './styles.module.scss'

export const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1>Bienvenidos a Mercado Libre</h1>
        <img src={logo} alt='Mercado libre' />
      </div>
    </>
  )
}
