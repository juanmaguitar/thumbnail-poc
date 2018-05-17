import React from 'react'
import PropTypes from 'prop-types'

import Thumbnail from '../components/Thumbnail'
import './Demo1.css'

const Demo1 = ({ images }) => {
  return (
    <div className="Demo1">
      <ul>
        {images.length &&
          images.map((url, index) => (
            <li key={index}>
              <Thumbnail src={url} />
            </li>
          ))}
      </ul>
    </div>
  )
}

Demo1.propTypes = {
  images: PropTypes.array
}

export default Demo1
