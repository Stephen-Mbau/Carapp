import React, {useState} from 'react'
import Products from './Products';


function Home() {
  const [ products, setProducts] = useState("")

  function productsData(data){

    setProducts(data)
     return(
       <ul>
          {products}
        </ul>)
  }
  return (
    <div>
        <p>This is the Homepage</p>
        <Products handleData={productsData} />
    </div>

  );
}

export default Home;