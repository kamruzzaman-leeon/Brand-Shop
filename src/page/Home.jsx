
import { Helmet } from 'react-helmet';
import Banner from '../component/Banner';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home</title>
            </Helmet>
         <Banner></Banner>
         {/* our Brands */}
         
        </div>
    );
};

export default Home;