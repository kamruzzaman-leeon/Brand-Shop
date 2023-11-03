import Swal from 'sweetalert2'
import Button from '../component/Button';

const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const productName = form.product_name.value;
    const productImageUrl = form.product_image_url.value;
    const brandName = form.brand_name.value;
    const productType = form.product_type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct ={productName,productImageUrl,brandName,productType,price,rating,description}
    console.log(newProduct)

}

const AddProduct = () => {
    return (
        <div className='shadow-xl p-24 container mx-auto'>
            <h2 className='text-5xl mb-10 text-center'>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form product name & img row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name"
                                name="product_name"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Image URL"
                                name="product_image_url"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>

                </div>
                {/* form brand name & type row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name"
                                name="brand_name"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 mx-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Type"
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
                            <input type="text" placeholder="Price"
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
                                <input type="radio" name="rating" value="0" id="0" className="rating-hidden"/>
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
                            <input type="text" placeholder="Description"
                                name="description"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="mb-8 mx-4"> <input type="submit" className="btn btn-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white" value="Add" /></div>

            </form>
        </div>
    );
};

export default AddProduct;