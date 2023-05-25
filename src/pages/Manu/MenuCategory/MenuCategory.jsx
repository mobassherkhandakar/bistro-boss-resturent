import React from 'react';
import ManuItems from '../../Home/ManuItems/ManuItems';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items, title, img}) => {
  return (
    <>
  {title && <Cover title={title} img={img}/>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5'> 
        {
          items.map(item => <ManuItems item={item} key={item._id}/>)
        }
      </div>
    </>
  );
};

export default MenuCategory;