import React from 'react'
import PropTypes from 'prop-types'

import './Demo2.css'

const Demo2 = ({ images }) => {
  return (
    <div className="Demo2">
      <ul>
        {images.length &&
          images.map((url, index) => (
            <li key={index}>
              <img src={url} alt="whatever"/>
            </li>
          ))}
      </ul>
    </div>
  )
}

Demo2.propTypes = {
  images: PropTypes.array
}

export default Demo2
