import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { CartSumContext } from "../store/CartSumContext";
import { AuthContext } from "../store/AuthContext";

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // funktsiooni taaskasutamine, funktsiooni parameetri saatmine

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  };

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  };

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Mihkel's webshop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true && (
              <Nav.Link as={Link} to="/admin">
                {t("admin")}
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/shops">
              {t("shops")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("contact")}
            </Nav.Link>
          </Nav>
          <Nav>
            {loggedIn === true && <button onClick={logout}>Logi välja</button>}
            <div>{cartSum} €</div>
            <img
              className="lang"
              src="/english.png"
              alt=""
              onClick={changeLangEn}
            />
            <img
              className="lang"
              src="/estonian.png"
              alt=""
              onClick={changeLangEe}
            />
            {loggedIn === false && 
              <Nav.Link as={Link} to="/login">
                {t("login")}
              </Nav.Link>
            }
            {loggedIn === false && 
              <Nav.Link as={Link} to="/signup">
                {t("signup")}
              </Nav.Link>
            }
            <Nav.Link as={Link} to="/cart">
              {t("cart")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
