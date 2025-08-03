const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.imgSrc} alt={item.name} />

        <h4>{item.name}</h4>
      <p>${item.price.toFixed(2)}</p>
      <button>+</button>

    </div>
  );
};

export default MenuCard;
