import React from 'react'
import PropTypes from 'prop-types'

import './Demo3.css'

const Demo3 = ({ images }) => {
  return (
    <div className="Demo3">
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

Demo3.propTypes = {
  images: PropTypes.array
}

export default Demo3
