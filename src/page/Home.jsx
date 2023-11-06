
import { Helmet } from 'react-helmet';
import Banner from '../component/Banner';

import BrandCard from '../component/BrandCard';
import { useLoaderData } from 'react-router-dom';
import CustomerReview from '../component/CustomerReview';

const Home = () => {
    const brands = useLoaderData()
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
                   Customer Review
                </div>
                <CustomerReview></CustomerReview>
            </div>

        </div>
    );
};

export default Home;