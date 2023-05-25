import React from 'react';
import useTitle from '../../../Hook/useTitele';
import Cover from '../../Shared/Cover/Cover';
import manuImg from '../../../assets/menu/banner3.jpg'

const Manu = () => {
useTitle('Manu')
  return (
    <>
      <Cover title={'our manu'} img={manuImg}/>
    </>
  );
};

export default Manu;