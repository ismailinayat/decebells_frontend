import Image from 'next/image';
import axios from 'axios';
import {useState, useContext, useEffect} from 'react';
import {CartContext} from '../../../contexts/CartContext'
import { toast, ToastContainer } from 'react-toastify';
import {useRouter} from 'next/router';
import {useQuery} from 'react-query';

import DetailCarousel from '../../../components/detailCaraousel';



const fetchProduct = async (id) => {
  
  try {
    //console.log(JSON.parse(JSON.stringify(id)))
    //const id = '600d3ac6fae8a4011feb0528';
    //console.log(id)
    const {data} = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
    //console.log(data)
    return data;

  } catch (error) {console.log(error.response.data.message)}                          // Everytime we go to the product detail page, we are getting an error from the 'server' in the terminal console saying 
                                                                                      // 'Cast to ObjectId failed for value 'undefined' at path "_id" for model "product"'
}

export async function getServerSideProps(context) {

  // Call an external API endpoint to get posts



  
  const product = await fetchProduct(context.params.id)       // Previously I was calling 'fetchProduct' function in this 'getServerSideProps' without passing the 'id' to it which was giving some kind of
                                                              // serializing error saying `undefined` cannot be serialized as JSON'. The reason was that 'getServerSideProps' must return a valid json object
                                                              // but because we were not passing the id to the fetchProduct therefore we were not returning a valid json object. Now we can solve this problem 
                                                              // by specifically saying something like props: {product: product || null} or using the spread operator on the 'product' that is saving the
                                                              // response coming from the 'fetchProduct' function. However we were still getting the error in our console from the 'catch' block of our 
                                                              // 'fetchProduct' function and this was 'Cast to ObjectId failed for value 'undefined' at path "_id" for model "product"'.
                                                              
                                                              // In short we needed to pass the 'id' of the product to fetchProduct when we were calling it in the 'getServerSideProps' function. It turns out
                                                              // that 'getServerSideProps' also gets access to something called 'context' and it contains many useful data including the 'params' which contains
                                                              // the url parameters. So used to to get the 'id' param and passed that to the 'fetchProduct' function.
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: 
      product,
    
  }
}



function Product(props) {
  const router = useRouter();
  const {id} = router.query;
  

  const {cartItems, setCartItems} = useContext(CartContext)
  
  const [qty, setQty] = useState('1')

  function handleQtyChange(e) {
    setQty(e.target.value)
  }

  const addToCartHandler = function () {

    const newCartItem = {
      id: id,
      image: productDetail.images[0],
      name: productDetail.title,
      price: productDetail.price,
      quantity: qty
    }

    const itemExists = cartItems.find(item => item.id === id)

    if (itemExists) {
      
      setCartItems(cartItems.map(item => item.id === itemExists.id ? newCartItem : item))
      
      localStorage.setItem('cart', JSON.stringify(cartItems))

      toast.success('Product quanity has been updated')
      
    }  else {
      
      setCartItems([...cartItems, newCartItem])
       
      localStorage.setItem('cart', JSON.stringify(cartItems))

      toast.success('Product has been added to the cart')
     
    }

    

  }

  useEffect(() => {
    const cartDataFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [];
    if (cartDataFromLocalStorage) {
      setCartItems(cartDataFromLocalStorage)
    }
  }, [])


  useEffect(() => {

    //console.log(`LocalStorage: ${localStorage.getItem('cart')}`)
    //console.log(`context: ${cartItems}`)
    localStorage.setItem('cart', JSON.stringify(cartItems))
  })

  const handleInputQty = function (e) {
    setQty(() => e.target.value)
  }

  const {data , status} = useQuery('productDetail', () => fetchProduct(id), {initialData: props.product});

  if (status === 'success') {

    var productDetail = data.data.product
  }

  if (productDetail) {
    console.log(productDetail)

    return(
      <div className='detail__screen'>

      <>
      <ToastContainer>

      </ToastContainer>
      </>
        <div className="detail__header">
          <div className="detail__header--left">
            <DetailCarousel images={productDetail.images} sku={productDetail.sku}/>
          </div>

          <div className="detail__header--right">
            <h1 style={{color:'black'}}>{productDetail.title}</h1>

            <label htmlFor="quantity" style={{color: 'black'}}>Quantity: </label>
            <input type="number" name='quantity' value={qty} onChange={handleQtyChange}/>
            <div>

            <button onClick={addToCartHandler}>Add To Cart</button>
            </div>
          </div>
        </div>
        
        
        
        
      </div>
    )
  } else {return null}

}



export default Product;
/*
<Image className='main__image' width={500} height={500} src={`/images/${productDetail.sku}-main image.jpg`}></Image>
          <form>
            <label style={{color: 'black'}} htmlFor='qty'>Qty</label>
            <input type='number' onChange={handleInputQty} name='qty' value={qty}></input>
          </form>
          <button onClick={addToCartHandler}>Add To Cart</button>
          */