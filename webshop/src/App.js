import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotFound from './pages/global/NotFound';

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            </Nav>
            <Nav>
              <img className="lang" src="/english.png" alt="" onClick={changeLangEn} />
              <img className="lang" src="/estonian.png" alt="" onClick={changeLangEe} />
              <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/contact" element={ <ContactUs /> } />
        <Route path="/shops" element={ <Shops /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/product" element={ <SingleProduct /> } />
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
    </div>
  );
}

export default App;


// 1. HomePage --> sorteerimise nupud
// 2. MaintainProducts --> kustutamise nupp
// 3. HomePage --> lisamine ostukorvi faili
//    Cart --> failis ostukorvi toodete võtmine ja seejärel nuppudega
//              lisamine, eemaldamine, tühjendamine, koguarvutus, dünaamika
// 4. Lisada 3-4's keel
// 5. Favicon, Google Fonts uus kirjastiil
// 6. React-toastify ---> HomePage-s kui lisatakse ostukorvi, 
//                        MaintainProducts kui kustutakse
// 7. Tõlkeid juurde lisada
// 8. LISADA PROJEKT FIREBASE-i (täpselt samamoodi nagu tegime)

// 9. AddProduct ---> eesti keelse järgi
// 10. SingleProduct ---> eesti keelse järgi
