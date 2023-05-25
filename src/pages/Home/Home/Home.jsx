import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import BistroBoss from '../BistroBoss/BistroBoss';
import PupularManu from '../PupularManu/PupularManu';
import FutureJob from '../FutureJob/FutureJob';
import Testimonial from '../Testimonial/Testimonial';
import useTitle from '../../../Hook/useTitele';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner/>
      <Catagory/>
      <BistroBoss/>
      <PupularManu/>
      <FutureJob/>
      <Testimonial/>
    </div>
  );
};

export default Home;