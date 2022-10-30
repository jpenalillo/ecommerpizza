import {React,useContext,useState,useEffect} from 'react'
import CardPizza from './CardPizza'
import ProductContext from '../contexts/ProductContext';
export default function ContentHome() {
  const [db, setDb] = useState([]);
  
  useEffect(() => {
    GetallPizzas();
  }, []);
  
  const GetallPizzas = async () => {
    const data = await fetch("./data/pizzas.json")
    const pizzas = await data.json()
    setDb(pizzas)
  };
  return (
    <div className='contenedorCard'>
       {db.map(item =>
         <li key="{item.id}">
            <CardPizza 
              item={item}
                  />

         </li>

       )}
    
    </div>
  )
}