import { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/menu.json')
      .then(res => res.json())
      .then(data => setMenuItems(data))
      .catch(err => console.error('Failed to load menu.json:', err));
  }, []);

  return (
    <div className="menu-grid">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-card">
          <img src={item.imgSrc} alt={item.name} /> {/* ✅ works for both local and online images */}
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <button>+</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
