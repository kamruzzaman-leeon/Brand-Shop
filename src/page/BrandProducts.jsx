import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../component/Button';
import { AiFillStar } from 'react-icons/ai';


const BrandProducts = () => {
    const brandProducts = useLoaderData();
    console.log(brandProducts);
    const location = useLocation()

    if (!brandProducts || brandProducts.length === 0) {
        // Display an alert using SweetAlert or any other alert library
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No products found!',

        });
        return <Navigate state={location.pathname} to="/"></Navigate>
    }

    return (
        <div className='container mx-auto p-5'>
            <div>slider</div>
            <div>
                <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                    {
                        brandProducts && brandProducts.length && <h2>{brandProducts[0].brand}</h2>
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="slide-down">
                    {brandProducts && brandProducts.length && brandProducts.map(brands => (
                        <div
                            className="card w-auto border transform transition-transform hover:scale-105 hover:opacity-80"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000"
                            key={brands._id}
                        >
                            <figure>
                                <img
                                    className="object-cover h-48 transform transition-transform hover:scale-105"
                                    src={brands.productImageUrl}
                                    alt={brands.product}
                                />
                            </figure>
                            <div className="card-body">
    <h2 className="text-center">{brands.product}</h2>
    <div className='flex flex-row justify-start '>
        <p className='flex flex-shrink-0 items-center'>
            Rating: {brands.rating}
            <span>
                <AiFillStar className="text-yellow-500" />
            </span>
        </p>
    </div>
    <p className="">Brand: {brands.brand}</p>
    <p className="">Type: {brands.productType}</p>
    <p className="">Price: {brands.price} Taka</p>
    <div className='flex justify-evenly'>
        <Button>Details</Button>
        <Button>Update</Button>
    </div>
</div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;
