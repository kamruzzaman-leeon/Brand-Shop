import { useLoaderData } from "react-router-dom";
import Slider from './Slider';


const CustomerReview = () => {
  const brands = useLoaderData()
  return (
 <>
 <Slider slider={brands}></Slider>
 </>
  );
};

export default CustomerReview;