import './App.css';
import { Route, Routes } from 'react-router-dom';
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


function App() {


  return (
    <div className="App">
      <NavigationBar />
     
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactUs /> } />
        <Route path="/shops" element={ <Shops /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/product/:productId" element={ <SingleProduct /> } />
        <Route path="/admin" element={ <AdminHome /> } />
        <Route path="/admin/add-product" element={ <AddProduct /> } />
        <Route path="/admin/edit-product/:productId" element={ <EditProduct /> } />
        <Route path="/admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="/admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="/admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      {/* <div>FOOTER</div> */}
    </div>
  );
}

export default App;

// 13. 10.08 - dünaamiline CSS-ga, kontrolle inputile
// KOJU: Nortali proovitöö
//             context
// 14. 15.08 - Sisselogimine/registreerumine API päringu kaudu
//              , avalehele kujundust, halda-tooted kujundus, MUI
// 15. 17.08 - URLi kaitset, TypeScript, CSS module, mobiilivaade, Karusell-galerii
// 16. 22.08 - 
// 17. 24.08 - Proovitöid, Nortali proovitöö
//             Firebase-s: pilte üles laadida
// 18. 07.09 - lõpuprojekt