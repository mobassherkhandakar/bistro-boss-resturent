import React from 'react';
import FoodCard from '../../Shared/FoodCard/FoodCard';

const OrderItem = ({item}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {
      item.map(items => <FoodCard key={items._id} item={items}/>)
    }
  </div>
  );
};

export default OrderItem;