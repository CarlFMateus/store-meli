import { Link } from 'react-router-dom'

import logo from '../../Assets/Logo_ML.png'
import search from '../../Assets/ic_Search.png'

import styles from './styles.module.scss'

export const View = ({
  handleChange,
  inputSearch,
  handleSubmit
}) => {
  return (
    <header className={styles.mainContainerHeader}>
      <div className={styles.containerHeader}>
        <Link to='/'><img src={logo} className={styles.logo} alt='Mercado Libre' /> </Link>
        <form className={styles.formSearch}>
          <input
            type='text'
            placeholder='Nunca dejes de buscar'
            onChange={handleChange}
            value={inputSearch}
          />
          <button type='submit' className={styles.iconSearch} onClick={handleSubmit}>
            <img src={search} alt='search' />
          </button>
        </form>
      </div>
    </header>
  )
}
