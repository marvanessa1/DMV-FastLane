// import Carimg from '../assets/Car.jpg';

const Home = () => {

  return (
  <div id="carousel-home" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel-home" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="  carousel-item active">
        <img src="https://pixabay.com/get/g41319d6e6215c563427464c6e3efe694e991dba85547455ea0724320073ab2a80c831f31504723b8f32bd21290785b6139443ed035d93c20ee2f9732c56a892a_1920.jpg" className="d-block w-50 center rounded-3" alt="..."/>
        <div className="carousel-caption d-none d-md-block bg-custom">
          <h5>Grand Theft Auto V</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://pixabay.com/get/g17b3e876733df6b111cfcc1f5ba9e273cd08547c139e2b4cdeba2c195a02c939955c320a7a8066e8bc163597b3169183f6c1e59c97085a3cb502f5db75280e63_1920.jpg" className="d-block w-50 center rounded-3" alt="..."/>
        <div className="carousel-caption d-none d-md-block bg-custom">
          <h5>The Witcher 3: Wild Hunt</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src="https://pixabay.com/get/g74ce0156f5cf77c31f2fc835714d43d9c6cbce1311436de10ef659e829d192b2cc04dc18b68ca50a5b286b80a0283e61_1920.jpg" className="d-block w-50 center rounded-3" alt="..."/>
        <div className="carousel-caption d-none d-md-block bg-custom">
          <h5>Borderlands 2</h5>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel-home" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel-home" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  );
};

export default Home;
