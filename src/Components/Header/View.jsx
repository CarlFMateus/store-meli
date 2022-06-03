import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { routes } from '../../routes'

import logo from '../../assets/Logo_ML.png'
import search from '../../assets/ic_Search.png'
import styles from './styles.module.scss'

export const View = ({
  handleChange,
  inputSearch,
  handleSubmit
}) => {
  return (
    <header className={styles.mainContainerHeader}>
      <div className={styles.containerHeader}>
        <Link to={routes.home}><img src={logo} className={styles.logo} alt='Mercado Libre' /> </Link>
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

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
