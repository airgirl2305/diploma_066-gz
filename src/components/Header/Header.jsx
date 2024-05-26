import "../Components.sass";
import logo from "../../../public/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Header() {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand className="mr-auto" href="/">
              <img src={logo} className="header__logo d-inline-block align-top" alt="Geek-s" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ml-auto">
                <Nav.Link href="/">Главная</Nav.Link>
                <NavDropdown title="Наши услуги" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/service/maintenance">
                    Плановое обслуживание
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/service/supply">Поставка запчастей</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/service/diagnostics">Диагностика</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/service/repairment">Ремонт</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contacts">Контакты</Nav.Link>
                <Nav.Link href="/about">о Нас</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}
