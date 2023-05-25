import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ManuItems from '../ManuItems/ManuItems';
import useManu from '../../../Hook/useManu';

const PupularManu = () => {
  const [manu] = useManu()
  const popular = manu.filter(item => item.category === 'popular')
  return (
    <section>
      <div>
        <SectionTitle subHeading={'FROM OUR MENU'} heading={'Check it out'}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5'> 
        {
          popular.map(item => <ManuItems item={item} key={item._id}/>)
        }
      </div>
    </section>
  );
};

export default PupularManu;