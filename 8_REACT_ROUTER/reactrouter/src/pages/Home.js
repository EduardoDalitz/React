import {Link} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Home.css';

const Home = () => {
  // 3 - Carregamento de dados
  const url = "http://localhost:3000/products"

  const {data: items, httpConfig, loading, error } = useFetch(url)


  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map((product)=>(
          
            <li key={product.id}>
              <h2>{product.name}</h2> 
              <p>{product.price}</p>
              {/*Rota dinâmica*/}
              <Link to={`products/${product.id}`}>Detalhes</Link>
            </li>
        ))}
       </ul>
    </div>
  )
}

export default Home