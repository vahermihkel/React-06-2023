import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import NotFound from './pages/global/NotFound';
import NavigationBar from './components/NavigationBar';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';


function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />
     
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactUs /> } />
        <Route path="/shops" element={ <Shops /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/product/:productId" element={ <SingleProduct /> } />
        {loggedIn === true && <>
          <Route path="/admin" element={ <AdminHome /> } />
          <Route path="/admin/add-product" element={ <AddProduct /> } />
          <Route path="/admin/edit-product/:productId" element={ <EditProduct /> } />
          <Route path="/admin/maintain-products" element={ <MaintainProducts /> } />
          <Route path="/admin/maintain-categories" element={ <MaintainCategories /> } />
          <Route path="/admin/maintain-shops" element={ <MaintainShops /> } />
        </>}
        {loggedIn === false && <Route path="/admin/*" element={ <Navigate to="/login" /> } /> }
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* <div>FOOTER</div> */}
    </div>
  );
}

export default App;

// 15. 17.08  1h - Nortali proovitöö
// 16. 22.08 - 17.30-20.45 4ak/h avalehele kujundust, CSS moodulid, Karusell-galerii,
//      TypeScript, mobiilivaade
// 17. 24.08 - 17.30-20.45 4ak/h Fujitsu proovitöö
// 17b. 31.08 - 17.30-19.30 2h Trinidad Wiseman proovitöö
// 18. 14.09 - 17.30-19.00 2ak/h lõpuprojekt, mina ei räägi enam, teie lühiesitlus
//    2ak/h    esitlete oma lehte ja osasid koodikohti