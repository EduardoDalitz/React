import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";




const Info = () => {

    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id

    const {data: product, loading, error} = useFetch(url)

    return (
    <div>
        <h2>Mais informações sobre o produto de id: {id}</h2>
        {product && (
            
            <div>
                <p>Nome do produto: {product.name}</p>
                <p>Preço do produto: R${product.price}</p>
            </div>
            
        )}  
        
    </div>
  )
}

export default Info