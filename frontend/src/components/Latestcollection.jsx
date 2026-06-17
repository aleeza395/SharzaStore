import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import Productitem from './Productitem';

const Latestcollection = () => {
    const { products } = useContext(Shopcontext);
    const [lastestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 5))
    }, [products])

  return (
    <div className='mx-5 mt-0 lg:mx-10 my-10'>
        <div className='text-center py-8 text-3x1'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-green-900'>
            Experience the beauty of nature with our latest collection of handcrafted herbal skincare, haircare, and signature scents. Infused with carefully selected botanical ingredients, our products are created to nourish, restore, and elevate your daily self-care routine. Embrace healthy, radiant beauty and discover fragrances that leave a lasting impression.
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
            {
                lastestProducts.map((item, index) => (
                    <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Latestcollection