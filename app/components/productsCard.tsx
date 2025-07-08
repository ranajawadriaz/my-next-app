
'use client' // this component is a client component, not a server component
import React from 'react'
import AddToCart from './AddToCart'
// import styles from './products.module.css' modular css



const ProductsCard = () => {
  return (
    // <div><button onClick={()=> console.log('Clicked')}>Add to Cart</button></div>

//     <div className={styles.card}>

// {/* css module */}
//       <AddToCart  />
//     </div>

<div className='p-4 my-5 bg-sky-400 text-white text-2xl hover:bg-sky-800'>


      <AddToCart  />
    </div>
   


   


  )
}

export default ProductsCard