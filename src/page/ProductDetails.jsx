import { v4 as uuidv4 } from 'uuid';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillStar } from 'react-icons/ai';
import MyCart from './MyCart';
import { useState } from 'react';


const ProductDetails = () => {
  const productinfo = useLoaderData()

  // console.log(productinfo)
  const { _id, product, productImageUrl, brand, productType, price, rating, description } = productinfo


  //local storage
  const handleAdd = () => {
    // Create an object to represent the item you want to add to the cart
    const cartItem = {
      
      _id: uuidv4(),
      product: product,
      productImageUrl: productImageUrl,
      brand: brand,
      productType: productType,
      price: price,
      rating: rating,
      description: description
    };
    fetch('http://localhost:5000/mycart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartItem)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully Product Added to Cart!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          return <Navigate state={location.pathname} to="/mycart"></Navigate>
        }

      })
  }


  if (!product || product.length === 0) {
    // Display an alert using SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No products details found!',

    });
    return <Navigate state={location.pathname} to="/"></Navigate>
  }
  return (
    <div className="container mx-auto px-5">
      <div className="bg-white shadow-lg rounded-lg py-5 w-full md:w-1/3  mx-auto">
        <div className="mb-10 relative ">
          <img src={productImageUrl} alt={product} className="w-auto  mx-auto" />
          <div className="absolute bottom-0 w-full p-4 bg-opacity-60 bg-stone-500 mx-auto">

            <button
              onClick={handleAdd}
              className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
            >
              Add My Cart
            </button>



          </div>
        </div>

        <div className="text-center p-5">
          <h2 className="text-xl font-bold mb-2">{product}</h2>
          <div className="flex flex-row justify-center mb-2">
            <p className="flex items-center">
              Rating: {rating}
              <span>
                <AiFillStar className="text-yellow-500" />
              </span>
            </p>
          </div>
          <p className="mb-2">Brand: {brand}</p>
          <p className="mb-2">Type: {productType}</p>
          <p>Price: {price} Taka</p>
          <p className='text-justify text-sm'>{description}</p>
        </div>
      </div>
    </div>


  );
};

export default ProductDetails;