import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import { Home, About, Services, Contact, Career, Products } from "./pages/Exports"
import { SlideData } from './data/headerData/SlideData';
import { ContactData } from './data/ContactData';
import Product from './pages/Product';
import Otcg from './filteredPages/Otcg';
import SeamlessPipes from './filteredPages/SeamlessPipes';
import PipeFittings from './filteredPages/PipeFittings';
import Spe from './filteredPages/Spe';
import Plugs from './filteredPages/Plugs';
import StainlessSteel from './filteredPages/StainlessSteel';
import Welded from './filteredPages/Welded';
import Cables from './filteredPages/Cables';
import { useEffect, useState } from 'react';
import axios from "axios";
import Others from './filteredPages/Others';


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const url = "https://hansenergy.onrender.com/api/products"

  const getProducts = () => {
    try {
      axios.get(url)
      .then((res) => {
        setItems(res.data)
      })
      setisLoading(true);
      
    } catch (error) {
      console.log(error.response)
    }
  };
  
  useEffect(() => {
    getProducts();
  }, [isLoading]);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home slides={SlideData} />} />
          <Route path="/about" element={<About slides={ContactData}/>} />
          <Route path="/services" element={<Services items={items}/>} />
          <Route path="/products" element={<Products items={items} loading={isLoading}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/otcg" element={<Otcg data={items} loading={isLoading}/>} />
          <Route path="/pipe" element={<PipeFittings data={items} loading={isLoading}/>} />
          <Route path="/plug" element={<Plugs data={items} loading={isLoading}/>} />
          <Route path="/seamlesspipe" element={<SeamlessPipes data={items} loading={isLoading}/>} />
          <Route path="/spe" element={<Spe data={items} loading={isLoading}/>} />
          <Route path="/stainless" element={<StainlessSteel data={items} loading={isLoading}/>} />
          <Route path="/welded" element={<Welded data={items} loading={isLoading}/>} />
          <Route path="/cables" element={<Cables data={items} loading={isLoading}/>} />
          <Route path="/others" element={<Others data={items} loading={isLoading}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
