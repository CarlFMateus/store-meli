import React from 'react'
import { Helmet } from 'react-helmet-async';

import logo from '../../assets/logo_meli.png'

import styles from './styles.module.scss'

export const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Mercado Libre</title>
        <meta
          name='description'
          content="Esta plataforma es una prueba para Mercado Libre" />
        <meta name='keywords' content='Mercado Libre' />
        <meta name='og:title' content='Mercado Libre' />
        <meta name='og:description' content="Esta plataforma es una prueba para Mercado Libre" />
      </Helmet>

      <div className={styles.homeContainer}>
        <h1>Bienvenidos a Mercado Libre</h1>
        <img src={logo} alt='Mercado libre' />
      </div>
    </>
  )
}
