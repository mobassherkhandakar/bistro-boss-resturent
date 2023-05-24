import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import  { useEffect, useState } from 'react';
import ManuItems from '../ManuItems/ManuItems';

const PupularManu = () => {
  const [manu,setManu] = useState([])
  useEffect(()=>{
    fetch('manu.json')
    .then(res=> res.json())
    .then(data => {
      const popular = data.filter(item => item.category  === 'popular')
      setManu(popular);
    })
  },[])
  console.log(manu);
  return (
    <section>
      <div>
        <SectionTitle subHeading={'FROM OUR MENU'} heading={'Check it out'}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5'> 
        {
          manu.map(item => <ManuItems item={item} key={item._id}/>)
        }
      </div>
    </section>
  );
};

export default PupularManu;