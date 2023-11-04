
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductUpdate = () => {
    const pro = useLoaderData();
    // console.log(pro);
    const { _id, product, productImageUrl, brand, productType, price, rating, description } = pro;
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const product = form.product.value;
        const productImageUrl = form.product_image_url.value;
        const brand = form.brand.value.toUpperCase();
        const productType = form.product_type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateProduct = { product, productImageUrl, brand, productType, price, rating, description }
        // console.log(updateProduct)

        // send data to server
        fetch(`http://localhost:5000/productdetails/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Product Updated!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    return (
        <div className='shadow-xl p-24 container mx-auto'>
            <h2 className='text-5xl mb-10 text-center'>Update Product  </h2>
            <form onSubmit={handleUpdateProduct}>
                {/* form product name & img row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Product</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={product} placeholder="Product"
                                name="product"
                                // defaultValue={product}
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={productImageUrl} placeholder="Image URL"
                                name="product_image_url"
                                // defaultValue={productImageUrl}
                                className="input input-bordered w-full" required />
                        </label>
                    </div>

                </div>
                {/* form brand name & type row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={brand} placeholder="Brand"
                                name="brand"

                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={productType} placeholder="Type"

                                name="product_type"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>

                </div>
                {/* form price & description row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} placeholder="Price"

                                name="price"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">

                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <div className="rating rating-lg">
                                <input type="radio" name="rating" value="0" id="0" className="rating-hidden" />
                                <input type="radio" name="rating" value="1" id="1" className="mask mask-star-2" />
                                <input type="radio" name="rating" value="2" id="2" className="mask mask-star-2" />
                                <input type="radio" name="rating" value="3" id="3" className="mask mask-star-2" />
                                <input type="radio" name="rating" value="4" id="4" className="mask mask-star-2" />
                                <input type="radio" name="rating" value="5" id="5" className="mask mask-star-2" />
                            </div>
                        </label>
                    </div>


                </div>
                {/* form Description row */}
                <div className='mb-8 mx-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={description} placeholder="Description"
                                name="description"

                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="mb-8 mx-4"> <input type="submit" className="btn btn-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white" value="Update" /></div>

            </form>
        </div>
    );
};

export default ProductUpdate;