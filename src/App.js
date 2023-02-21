
import './App.css';
import './pages/homepage/homepage.styles.scss'
import HomePage  from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router";
import ShopPage from './pages/homepage/ShopPage'
function App() {
  return (

   
    <Routes>
    <Route  path="/" element={<HomePage/>} />
    <Route exact path="/shop" element={<ShopPage/>} />
    
    
    
    </Routes>
    
    
    
    
    
    

    
  );
}

export default App;
