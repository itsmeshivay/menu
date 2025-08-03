import React from "react";






const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
       <img src="logo.jpg" alt="Logo" />
      </div>
      <div className="sidebar-header">
        <h2 >Your Restaurant Menu</h2>
        <p>Your Slogan</p>
      </div>

      <nav>
        <h4>Quick Links</h4>
        <ul>
          <li>1. Home</li>
          <li>2. Your Orders</li>
          <li>3. Wallet</li>
          <li>4. Profile</li>
          <li>5. Logout</li>
        </ul>
        <h4>More About Us</h4>
        <ul>
          <li>1. Our Blog</li>
          <li>2. Upcoming Dishes</li>
          <li>3. Our Story</li>
          <li>4. Social Media Links</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
