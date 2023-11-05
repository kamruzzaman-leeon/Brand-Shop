import { Navigate, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

const MyCart = () => {
    const cartItems = useLoaderData();
    const [citems, setCitems] = useState(cartItems)
    if (!cartItems || cartItems.length === 0) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No products found in Cart!',

        })
        return <Navigate state={location.pathname} to="/"></Navigate>
    }
    // Define a function to handle removing items from the cart
    const handleRemove = (itemId) => {
        console.log('Removing item with ID:', itemId);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/mycart/${itemId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainingItem = citems.filter(citem => citem._id !== itemId)
                            setCitems(remainingItem);

                        }
                    })
            }
        })
    };

    return (
        <div className='container mx-auto p-5 my-10'>
            <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                Cart Item
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="slide-down">
                {
                    citems.map((item) => (
                        <div key={item._id} className="card w-auto border">
                            <div className="bg-white shadow-lg rounded-lg py-5 w-full h-full mx-auto">
                                <div className="mb-10 relative">
                                    <img src={item.productImageUrl} alt={item.product} className="w-auto mx-auto h-52" />
                                    <div className="absolute bottom-0 w-full p-4 bg-opacity-60 bg-stone-500 mx-auto">
                                        <button
                                            onClick={() => handleRemove(item._id)} // Pass the item ID to the handleRemove function
                                            className="btn bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                                        >
                                            Remove from Cart
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center p-5">
                                    <h2 className="text-xl font-bold mb-2">{item.product}</h2>
                                    <div className="flex flex-row justify-center mb-2">
                                        <p className="flex items-center">
                                            Rating: {item.rating}
                                            <span>
                                                <AiFillStar className="text-yellow-500" />
                                            </span>
                                        </p>
                                    </div>
                                    <p className="mb-2">Brand: {item.brand}</p>
                                    <p className="mb-2">Type: {item.productType}</p>
                                    <p>Price: {item.price} Taka</p>
                                    <p className='text-justify text-sm'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
};

export default MyCart;
