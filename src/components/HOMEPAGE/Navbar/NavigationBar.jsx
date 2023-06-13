import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../../assets/logo/logo-no-background.png';
import { faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divide as Hamburger } from 'hamburger-react';
import Progress from './Progress';
import products from "../../data/SignatureProducts";
import Search from '../Search/Search';
import navProducts from '../../data/NavProducts';

class NavigationBar extends Component {
  state = {
    scrollPosition: 0,
    searchQuery: '',
    searchResults: [],
    isNavCollapsed: true,
    isOpen: false
  };

  componentDidMount() {
    this.listenToScrollEvent();
  }

  listenToScrollEvent = () => {
    document.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    this.setState({
      scrollPosition,
    });
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  handleNavToggle = () => {
    this.setState(prevState => ({
      isNavCollapsed: !prevState.isNavCollapsed,
      isOpen: !prevState.isOpen
    }));
  };

  handleNavClose = () => {
    this.setState({
      isNavCollapsed: true,
      isOpen: false,
      searchResults: []
    });
  };

  handleSearchButtonClick = (e) => {
    const { searchQuery } = this.state;
    const allProducts = [...products, ...navProducts];
    const searchResults = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );

    this.setState({
      searchResults,
    });
  };

  handleSearchChange = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSearchButtonClick(e);
    } else {
      this.setState({
        searchQuery: e.target.value.toLowerCase(),
      });
    }
  };

  render() {
    const { displayName, photoURL } = this.props;
    const { searchQuery, searchResults, isNavCollapsed } = this.state;
    const showSearchResults = searchQuery && searchResults.length > 0;

    return (
      <>
      <nav className='sticky-top'>
        <Progress scroll={this.state.scrollPosition + '%'} className='progress-bar'/>
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width={130} height={50} className='nav-logo' alt='nav-logo' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className='navbar-toggler d-lg-none toggler d-flex flex-column justify-content-around collapsed'
            onClick={this.handleNavToggle}
          >
            <Hamburger size={30} color="#fdc300" rounded toggled={this.isOpen} toggle={this.setOpen} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-nav" className="justify-content-end align-items-center" in={!isNavCollapsed}>
            <Nav className="mt-md-3 mt-lg-0" >
              <Nav.Link as={Link} to="/" className='nav-link' onClick={this.handleNavClose}>Home</Nav.Link>
              <Nav.Link as={Link} to="/products" className='nav-link mt-md-2 mt-lg-0' onClick={this.handleNavClose}>Products</Nav.Link>
              <NavDropdown title="Categories" id="categories-dropdown" className='mt-md-2 mt-lg-0'>
                <NavDropdown.Item as={Link} to="/signature" className="dropdown-item" onClick={this.handleNavClose}>Signature</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/crop-top" className="dropdown-item" onClick={this.handleNavClose}>Crop Top</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hoodie" className="dropdown-item"onClick={this.handleNavClose}>Hoodie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sweater" className="dropdown-item" onClick={this.handleNavClose}>Sweater</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/t-shirt" className="dropdown-item" onClick={this.handleNavClose}>T-shirt</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/totebag" className="dropdown-item" onClick={this.handleNavClose}>Tote Bag</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/wishlist" className='nav-icon nav-heart' onClick={this.handleNavClose}><FontAwesomeIcon icon={faHeart} /></Nav.Link>
              <Nav.Link as={Link} to="/cart" className='nav-icon nav-cart' onClick={this.handleNavClose}><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
              <Nav.Link as={Link} to="/login" className='nav-icon nav-user' onClick={this.handleNavClose}>
                {displayName ? (
                  <img src={photoURL} alt="User" className="user-photo" />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
              </Nav.Link>
            </Nav>
            <Form inline={true.toString()} className='d-flex align-items-center' >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 search-box"
                value={searchQuery}
                onChange={this.handleSearchChange}
              />
                <Button as={Link} to='/search' variant="outline-dark" className='search-button' onClick={this.handleSearchButtonClick}>
                  Search
                </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </nav>
        {showSearchResults && ( <Search searchResults={searchResults} /> )} 
      </>
    );
  }
}

export default NavigationBar;

