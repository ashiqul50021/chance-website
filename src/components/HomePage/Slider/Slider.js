import React from 'react';
import "./Slider.css";
import slidershadow from "../../../images/slidershadow.png";
import slide1 from "../../../images/slide1.png";
import reactangular from "../../../images/Rectangle.png";

const Slider = () => {
  var sectionStyle = {
    backgroundSize: 'cover',
    height: "494px",
    backgroundRepeat:'no-repeat',
    width:'100%',
    backgroundImage: `url(${reactangular})`
  };
  
  return (
   <div style={sectionStyle} className='slider mb-2 mt-4'>
      <div>

<div className='text-center text-white'>
  <h3 className='mt-5'>Download the app</h3>
<img className='mb-5' src={slidershadow} alt="" />
</div>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} style={{ width: '270px', height: '250px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} class="d-block mb-2" alt="..." />
      <p className='text-center text-white mb-5'>Tap  ‘Download’ when prompt appears</p>
    </div>
    <div class="carousel-item">
      <img src={slide1} style={{ width: '270px', height: '250px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} class="d-block mb-2" alt="..." />
      <p className='text-center text-white mb-5'>Tap  ‘Download’ when prompt appears</p>
    </div>
    <div class="carousel-item">
      <img src={slide1} style={{ width: '270px', height: '250px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} class="d-block mb-2" alt="..." />
      <p className='text-center text-white mb-5'>Tap  ‘Download’ when prompt appears</p>
    </div>
  </div>

</div>
{/* <button type="button" class="btn banner-btn mb-4" style={{width:'152px', height:'41px',backgroundColor:'white',borderRadius:'40px',color:'black',marginLeft:'auto',marginRight:'auto',display:'block'}}>Download App</button> */}
<a class="btn banner-btn" href="https://chance-app-assets.s3.ap-south-1.amazonaws.com/apk/ChanceAppBeta.apk" style={{width:'152px', height:'41px',backgroundColor:'white',borderRadius:'40px',color:'black',marginLeft:'auto',marginRight:'auto',display:'block'}} role="button">Download App</a>
</div>
   </div>
  );
};

export default Slider;