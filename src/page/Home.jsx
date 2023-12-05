
import { Helmet } from 'react-helmet';
import Banner from '../component/Banner';

import BrandCard from '../component/BrandCard';
import { useLoaderData } from 'react-router-dom';
import CustomerReview from '../component/CustomerReview';
import AboutUs from '../component/AboutUs';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    const { brandData: brands, ...res } = data;

    // console.log(brands)

    return (
        <div className=''>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>

            <div className='container mx-auto p-5 my-10 '>
                <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                    Our Brand Product
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-aos="slide-down">
                    {
                        brands && brands.length && brands.map(brand => <BrandCard brands={brand} key={brand._id}  ></BrandCard>)
                    }
                </div>
                <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                Customer testimonial
                </div>
                <p className='text-center'><i>Reviews represent evaluations of a company, product, or service, that customers write.</i></p>
                <CustomerReview></CustomerReview>
                <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                About Us
                </div>
            <div className='container mx-auto p-5 my-10 '>
                <AboutUs></AboutUs>
            </div>
            </div>
            

        </div>
    );
};

export default Home;