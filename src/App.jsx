import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import "./App.css"; // Your custom CSS

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <Banner />
        <Menu />
      </main>
    </div>
  );
}

export default App;
