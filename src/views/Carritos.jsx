import {React,useContext} from 'react'
import NavBarPizza from '../components/NavBarPizza'
import ProductContext from '../contexts/ProductContext';
import Button from 'react-bootstrap/Button';

export default function Carritos() {
  const { products} = useContext(ProductContext)


  return (
    <div className='container'>
    
    <NavBarPizza/>
    <h2 className='text-center'>Detalle del pedido</h2>
    <div className='text-center'>
    <ul>
    {
                            products
                              .map(item =>
                                <div className='row'>
                                  <div className='col-sm' style={{textAlign: "left"}}>{item.name}</div>
                                  <div className='col-sm'>{item.price}</div>
                                </div>
                            )
                        }




    </ul>
    </div>
    <div className='text-center'>
      <h5>TOTAL: {
                    products.reduce((x,s)=> x + s.price,0)
            }</h5>
    </div>
    <div className='text-center'>
    <Button className='btn btn-info text-center'>Ir a pagar</Button>
    
    </div>
    </ div>
  )
}
