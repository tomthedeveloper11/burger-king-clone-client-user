import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export function CategoryCard(props) {
  return (
    <Link to={`/menu/${props.category.name}`}>
      <Card className='category-card'>
        <Card.Img
          className='category-card-img'
          variant='top'
          src={props.category.imgUrl}
        />
        <Card.Body>
          <div>
            <Card.Title className='insaniBurgerFont category-card-title'>
              {props.category.name}
            </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </Link>
  )
}
