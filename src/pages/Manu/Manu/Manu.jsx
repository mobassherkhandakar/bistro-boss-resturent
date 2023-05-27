import React from 'react';
import useTitle from '../../../Hook/useTitele';
import Cover from '../../Shared/Cover/Cover';
import manuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../Home/SectionTitle/SectionTitle';
import useManu from '../../../Hook/useManu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Manu = () => {
useTitle('Manu')
const [manu] = useManu()
const salad = manu.filter(item => item.category === 'salad')
const soup = manu.filter(item => item.category === 'soup')
const dessert = manu.filter(item => item.category === 'dessert')
const pizza = manu.filter(item => item.category === 'pizza')
const offered = manu.filter(item => item.category === 'offered')

  return (
    <>
      <Cover title={'our manu'} img={manuImg}/>
      <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"/>
      {/* Offered menu */}
      <MenuCategory items={offered}/>
      {/* Dessert Menu */}
      <MenuCategory items={dessert} img={dessertImg} title={'dessert'}/>
      <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}/>
      <MenuCategory items={salad} img={saladImg} title={'salad'}/>
      <MenuCategory items={soup} img={soupImg} title={'soup'}/>

    </>
  );
};

export default Manu;