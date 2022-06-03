import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import logo from '../../Assets/Logo_ML.png'
import search from '../../Assets/ic_Search.png'

export const View = ({ 
  children, 
  handleChange, 
  inputSearch, 
  handleSubmit
}) => {

  return (
    <div>
      <div>
        <Link to='/'><img src={logo} alt='Mercado Libre' /> </Link>
        <form>
          <input 
            type='text' 
            placeholder='Nunca dejes de buscar' 
            onChange={handleChange}  
            value={inputSearch}
          />
          <button type='submit' onClick={handleSubmit}>
            <img src={search} alt='search' />
          </button>
        </form>
      </div>
      {children}
    </div>
  )
}

View.propTypes = {
  children: PropTypes.element,
  handleChange: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}