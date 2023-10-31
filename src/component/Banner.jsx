

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/W08G23y/pexels-cottonbro-studio-4620843.jpg)'}}>
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-amber-400 font-bold">Get Glam with Us</h1>
            <p className="mb-5">Start your beauty journey with us - the perfect destination for makeup lovers.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;