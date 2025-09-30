import './App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from './components/Home';
import {ProductDetail} from './components/ProductDetail';
import {ProductList} from "./components/ProductList";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="products" element={<ProductList/>} />
                    <Route path="products/10001" element={<ProductDetail />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </main>
        <Footer />
    </div>
  );
}

export default App;
