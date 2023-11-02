
import { Helmet } from 'react-helmet';
import Banner from '../component/Banner';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home</title>
            </Helmet>
         <Banner></Banner>
         
         <div className='container mx-auto px-5 mt-10 '>
            
         </div>
         
        </div>
    );
};

export default Home;