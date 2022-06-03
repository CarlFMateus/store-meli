import React from 'react'
import { BreadCrumb, Items, Layout } from '../../Components'

import styles from './styles.module.scss'

export const View = ({ categories, loading, items }) => {
  return (
    <Layout>
      <div className={styles.mainContainerSearch}>
        {loading && 'Loading ...'}

        {!loading && (
          <>
            <BreadCrumb categories={categories} />
            <Items items={items} />
          </>
        )}
      </div>
    </Layout>
  )
}
