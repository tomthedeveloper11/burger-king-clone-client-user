import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export function NavBar({}) {
  return (
    <Navbar expand='lg' className='sticky-top' style={{backgroundColor: '#f5ebdc'}}>
      <Container>
        <NavLink to='/'>
          <img
            src='https://logos-world.net/wp-content/uploads/2020/05/Burger-King-Logo.png'
            height='65'
            className='d-inline-block align-top'
            alt='Burger King Logo'
          />
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='navItem' to='menu'>Menu</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
