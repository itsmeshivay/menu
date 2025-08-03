const Header = () => {
  return (
    <div className="top-bar">
      <input type="text" placeholder="Search Food Item" />
      <button className="signup">Signup</button>
      <button className="login">Login</button>
      <div>
       <img src="logo.jpg" alt="Restaurant Logo" id="header-logo" /> {/* ✅ works for both local and online images */}
      </div>
    </div>
  );
};

export default Header;
