import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const BrandCard = ({ brands }) => {
  const { brand, brand_img } = brands;

  return (
    <Link to={`/brandproduct/${brand}`} className="card w-auto border shadow-xl transform transition-transform hover:scale-105 hover:opacity-80" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
    
      <figure>
        <img
          className="w-full h-48 transform transition-transform hover:scale-105"
          src={brand_img}
          alt={brand}
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-center">{brand}</h2>
      </div>
   </Link>
  );
};

BrandCard.propTypes = {
  brands: PropTypes.object,
};

export default BrandCard;
