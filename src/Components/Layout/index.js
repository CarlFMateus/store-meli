import { Header } from '../Header'
import styles from './styles.module.scss'

export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className={styles.mainContainer}>
        {children}
      </div>
    </>
  )
}
