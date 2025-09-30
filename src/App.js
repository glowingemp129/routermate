import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import {Home} from './components/Home';
import {ProductDetail} from './components/ProductDetail';
import {ProductList} from "./components/ProductList";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Admin} from "./components/Admin";

function App() {
    const isAdmin = true;
  return (
    <div className="App">
        <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="products" element={<ProductList/>} />
                    <Route path="products/10001" element={<ProductDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="admin" element={ isAdmin ? <Navigate to="admin" /> : <Navigate to="/" />} />
                </Routes>
            </main>
        <Footer />
    </div>
  );
}

export default App;
