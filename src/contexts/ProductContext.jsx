import { createContext,useState } from "react"

/*const getProductById = (id) => {
    return products.find((p) => p.item.id === id);
};*/
const ProductContext = createContext()
/*const AddProductCar = (Obj)=>{
    const [products, setProducts] = useState([]);
    setProducts(current => [...current, Obj]);
} */
export default ProductContext