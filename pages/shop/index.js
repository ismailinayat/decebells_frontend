import Product from '../../components/product_card';
import axios from 'axios';
import {useQuery} from 'react-query';



const fetchProducts = async () => {
  const {data} = await axios.get('http://localhost:5000/api/v1/products');
  return data;
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const products = await fetchProducts()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}

function Shop(props) {
  

  let {data, error, isLoading, isError} = useQuery('allProducts', fetchProducts, {initialData: props.products});


  return(
    <div className="product__screen">
      <div className="product__screen--content">
        {data.data.products.map(product => <Product key={product.id} data={product}/>)}
      </div>
    </div>
  )
}



export default Shop;
    
      
