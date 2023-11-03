
import { Helmet } from 'react-helmet';
import Banner from '../component/Banner';

import BrandCard from '../component/BrandCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const brands = useLoaderData()
    // console.log(brands)

    return (
        <div className=''>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>

            <div className='container mx-auto px-5 my-10 '>
                <div className="divider text-xl md:text-5xl font-bold text-center my-20" data-aos="slide-right">
                    Our Brand Product
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="slide-down">
                    {
                        brands && brands.length && brands.map(brand => <BrandCard brand={brand} key={brand.id}  ></BrandCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;