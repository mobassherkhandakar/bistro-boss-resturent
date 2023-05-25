import React from 'react';
import useTitle from '../../../Hook/useTitele';
import Cover from '../../Shared/Cover/Cover';
import manuImg from '../../../assets/menu/banner3.jpg'
import SectionTitle from '../../Home/SectionTitle/SectionTitle';
import useManu from '../../../Hook/useManu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Manu = () => {
useTitle('Manu')
const [manu] = useManu()
const salad = manu.filter(item => item.category === 'salad')
const drinks = manu.filter(item => item.category === 'drinks')
const dessert = manu.filter(item => item.category === 'dessert')
const offered = manu.filter(item => item.category === 'offered')

  return (
    <>
      <Cover title={'our manu'} img={manuImg}/>
      <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"/>
      <MenuCategory items={offered}/>
    </>
  );
};

export default Manu;