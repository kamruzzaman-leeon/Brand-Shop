import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
  const { name, image_url } = brand;

  return (
    <div className="card w-auto border shadow-xl transform transition-transform hover:scale-105 hover:opacity-80" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
    
      <figure>
        <img
          className="w-full h-48 transform transition-transform hover:scale-105"
          src={image_url}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
