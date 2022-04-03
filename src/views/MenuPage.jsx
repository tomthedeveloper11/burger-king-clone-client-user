import { MenuItemCard } from '../components/MenuItemCard'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../store/actions/itemsAction'
import { css } from '@emotion/react'
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
  display: block;
  margin: 220px 0 0 700px;
  position: absolute;
`

export default function MenuPage({}) {
  const dispatch = useDispatch()

  const { items } = useSelector((state) => state)
  const { isLoading } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <>
      <div className='sweet-loading'>
        <BeatLoader
          color={'white'}
          loading={isLoading}
          css={override}
          size={40}
          margin={7}
        />
      </div>

      {isLoading && (
        <div style={{ height: '90vh', width: '100vh' }}></div>
      )}
      {items && !isLoading && (
        <>
          <div className='page-header'>
            <h1 className='page-title'>All Menus</h1>
          </div>

          <div className='page-container'>
            <Link to='/'>
              <Button
                className='text-nowrap insaniBurgerFont home-card-button d-flex justify-content-start ms-5'
                variant='outline-danger'
              >
                ← Home
              </Button>
            </Link>

            <div className='d-flex flex-wrap '>
              {items.map((item, i) => {
                return <MenuItemCard key={i} item={item} />
              })}
            </div>
          </div>
        </>
      )}
    </>
  )
}
