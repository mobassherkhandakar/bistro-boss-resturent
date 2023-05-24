const ManuItems = ({ item }) => {
  console.log(item);
  const { name, recipe, price, image } = item;
  return (
    <div className="flex space-x-4">
      <img style={{borderRadius: '0 120px 120px 120px'}} className="w-32" src={image} alt="" />
      <div>
        <h3 className="text-2xl uppercase">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default ManuItems;
