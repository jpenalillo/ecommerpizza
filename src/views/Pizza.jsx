import {React,useState,useEffect,useContext} from 'react'
import NavBarPizza from '../components/NavBarPizza'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ProductContext from '../contexts/ProductContext';
import '../assets/css/main.css'
export default function Pizza() {
  const { id } = useParams();
  const [info, setInfo] = useState([])
  const {product,setProducts} = useContext(ProductContext)
  
  useEffect(() => {
    getPizza()
  }, []);

  
  const getPizza = async () => {
    console.log(id)
    const data = await fetch(`../data/pizzas.json`)
    const users = await data.json()
    setInfo(users)
  };

  return (
    <>
    
    <NavBarPizza/>
    
    {
      info.filter(
                                      (item) => {
                                          return item.id.includes(id)
                                      }
                                  )
            .map(item =>
              <div 
              key={item.id} className="text-center">
                <h1>{item.name}</h1>
                <img src={item.img} />
                  <p style={{width:'700px',margin:'0 auto'}}>{item.desc}</p>
                <p> Ingredientes:
                  <ul>
                  {item.ingredients.map(item=>
              
                          <li 
                                key={item}>
                                  {item}
                          </li>

                          )
                      }
                  </ul>
                </p>
                
                  <p>Precio: ${item.price}</p>
                  
        {<Button className='btn btn-info' 
        onClick={e => 
          setProducts(current => [...current,
            {
              id:item.id,
              name:item.name,
              price:item.price,
              qty:1
            }
          ])
        }>Añadir 🛒</Button>}
              </div>
            )


    }

    </>
  )
}
