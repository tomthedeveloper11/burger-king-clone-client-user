import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export function HomeCard(props) {
  return (
    <Card className='home-card'>
      <Card.Img className='home-card-img' variant='top' src={props.imgSrc} />
      <Card.Body className='d-flex justify-content-between'>
        <div className='text-start'>
          <Card.Title className='insaniBurgerFont'>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </div>

        <Button
          className='text-nowrap align-self-end insaniBurgerFont home-card-button'
          variant='outline-danger'
        >
          {props.buttonText}
        </Button>
      </Card.Body>
    </Card>
  )
}
