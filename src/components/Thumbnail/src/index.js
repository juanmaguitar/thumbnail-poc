import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const imageNotFoundUrl =
  'http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif'
const imageNotFoundAlt = 'Image Not Found'

const Thumbnail = ({ src = imageNotFoundUrl, alt = imageNotFoundAlt }) => {
  return (
    <figure className="Thumbnail" style={{ backgroundImage: `url(${src})` }}>
      <img src={src} alt={alt} />
    </figure>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Thumbnail
