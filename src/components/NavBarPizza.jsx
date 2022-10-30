import {React,useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ProductContext from '../contexts/ProductContext';
import { Link } from "react-router-dom";
export default function NavBarPizza() {
  const { products} = useContext(ProductContext)
  return (
    <>
    <Navbar className='navbar-dark bg-dark'>
      <Container>
        <Navbar.Brand href="/home">🍕Pizzeria Mamma Mía</Navbar.Brand>
          <Navbar.Text>
            <Link to={`/Carrito`}>
            🛒 {
                    products.reduce((x,s)=> x + s.price,0)
            }
            </Link>
          </Navbar.Text>
        </Container>
    </Navbar>
    </>
  )
}
