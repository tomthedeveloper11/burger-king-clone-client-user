import { MenuItemCard } from '../components/MenuItemCard'
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItemById, fetchItems } from '../store/actions/itemsAction'
import { css } from '@emotion/react'
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
  display: block;
  margin: 220px 0 0 700px;
  position: absolute;
`

export default function MenuPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const item = useSelector((state) => state.itemById)
  const { isLoading } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchItemById(id))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
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
      {isLoading && <div style={{ height: '90vh', width: '100vh' }}></div>}
      {item && !isLoading && (
        <>
          <div className='page-header'>
            <h1 className='page-title'>{item.name}</h1>
          </div>

          <div className='page-container'>
            <Link to='/menu'>
              <Button
                className='text-nowrap insaniBurgerFont d-flex justify-content-start ms-4 mb-2 back-button'
                variant='outline-danger'
              >
                ← All menu
              </Button>
            </Link>
            <div
              style={{
                width: '100%',
                height: '200px',
                position: 'absolute',
                backgroundColor: '#ff8732',
                marginLeft: '-180px',
                zIndex: -1,
              }}
            />

            <div className='mx-auto mb-3 justify-items-end'>
              <img
                src={item.imgUrl}
                alt={`${item.name} img`}
                style={{
                  maxHeight: '400px',
                  marginTop: '-30px',
                  marginBottom: '30px',
                }}
              />
              <h2 className='item-card-name'>{item.name}</h2>
              <h5 className='item-card-price' style={{ letterSpacing: '2px' }}>
                {item.Category.name}
              </h5>
            </div>
            <div
              className='mx-auto mb-5'
              style={{ maxWidth: '500px', color: '#522523' }}
            >
              <p className='h6'>{item.description}</p>
              <p className='lead'>
                Price: Rp. {item.price.toLocaleString('id-ID')}
              </p>
              <hr />
              <div>
                <h5>Ingredients</h5>
                <div>
                  {item.Ingredients.map((ingredient) => {
                    return (
                      <div
                        key={ingredient.id}
                        className='badge badge-pill text-dark bg-light mx-3'
                      >
                        {ingredient.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
