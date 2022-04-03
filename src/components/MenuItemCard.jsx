import React from 'react'
import { Link } from 'react-router-dom'

export function MenuItemCard(props) {
  return (
    <Link to={'/menu/' + props.item.id} className='mx-auto mb-3'>
      <img
        className='item-card-img'
        src={props.item.imgUrl}
        alt={`${props.item.name} img`}
      />
      <h5 className='item-card-name'>{props.item.name}</h5>
      <small className='item-card-price'>{props.item.Category.name}</small>
    </Link>
  )
}
