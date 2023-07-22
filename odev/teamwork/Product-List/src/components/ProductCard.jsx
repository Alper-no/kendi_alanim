import React from 'react'
import {Col} from 'react-bootstrap'

const ProductCard = ({image,price,title}) => {
  return (
    <Col xs={12} sm={6} lg={4} >
      <div className='card'>
        <img src={image} className='card-img-top' alt={image} />
        <div className='card-price'>
          {price} $

        </div>

        <div className='card-title'>
          {title}
        </div>
      </div>
    </Col>
  )
}

export default ProductCard