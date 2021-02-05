import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import QuickView from "./QuickView";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import PayPalButton from "./PayPalExpress";
import Popup from "react-popup";
import emailNotify from "./Emailer";
import PayPalForwarder from "./PayPalForwarder";
import CheckoutHelper from "./Checkout";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import Product from "./Product";
import PayPalExpress from "./PayPalExpress";

// Examples

//

export default class ShopPage extends Component {
  zTest = 0;
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: window.location.hash,
      category: "",
      cartBounce: false,
      quantity: 1,
      size: 1,
      style: 1,
      stock: 1,
      quickViewProduct: {},
      modalActive: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url = "./products.json";
    axios.get(url).then((response) => {
      this.setState({
        products: response.data,
      });
    });
  }

  UNSAFE_componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex((x) => x.id === productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    setTimeout(
      function () {
        this.setState({
          cartBounce: false,
          quantity: 1,
        });
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: 1,
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty,
    });
  }
  // Open Modal
  openModal(product) {
    if (document.forms.myForm != null) {
      document.forms.myForm.reset();
    }
    if (document.forms[0] != null) {
      document.forms[0].reset();
    }
    if (document.forms[1] != null) {
      document.forms[1].reset();
    }
    this.setState({
      quickViewProduct: product,
      modalActive: true,
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false,
    });
  }

  render() {
    document.getElementById("popupContainer");
    return (
      <Fragment>
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          productQuantity={this.state.quantity}
          categoryTerm={this.state.category}
          productSize={this.state.size}
          productStyle={this.state.style}
          productStock={this.state.stock}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <QuickView
          product={this.state.quickViewProduct}
          addToCart={this.handleAddToCart}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
          productQuantity={this.state.quantity}
          categoryTerm={this.state.category}
          productSize={this.state.size}
          productStyle={this.state.style}
          productStock={this.state.stock}
        />
      </Fragment>
    );
  }
}
